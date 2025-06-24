# 1. Install dependencies
FROM node:18-alpine AS deps

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./


RUN npm install

# 2. Build the Next.js app
FROM node:18-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build || (cat .next/BUILD_ID || echo "Build failed" && exit 1)


# 3. Run the app in production
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production


COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]
