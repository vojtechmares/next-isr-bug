# syntax=docker/dockerfile:1
FROM node:22-alpine AS base

FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

RUN corepack enable pnpm

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install


FROM base AS builder

WORKDIR /app

RUN corepack enable pnpm

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG CMS_API_URL="https://cms.mareshq.com/api"
ARG CMS_API_TOKEN="fed52c34ec97b01ff148a7a7cebbc05903cfe774873651e876e2f77a9a19238c7372d751db5af81bc668aa08baf3d9ceb3696e955962474a6bd271125a6bb5029a1f1921ef435f63eaa52585fa82d3f655e6f8bd17e62921a13bb62bf1ed5d3aa268dbbe76799b53fb9943f8b7c42a3a49fd7f0bf94eba3da435a223fde7cf11"

# COPY .env.production.sample .env.production
RUN pnpm run build

FROM base AS runtime

WORKDIR /app

ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/images ./images

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "./server.js"]
