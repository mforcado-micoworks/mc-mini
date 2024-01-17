FROM node:20 AS Base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /usr/src/app
COPY . .
RUN pnpm install --frozen-lockfile && \
    pnpm build
CMD ["pnpm", "start:prod:nestjs-kafka"]