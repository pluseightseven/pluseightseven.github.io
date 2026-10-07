FROM rust:1.75 as builder

WORKDIR /app
COPY . .

RUN cargo build --release

# Stage 2: Runtime
FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=builder /app/target/release/pluseightseven-github-io /app/
COPY static /app/static

EXPOSE 3000

ENV PORT=3000
CMD ["./pluseightseven-github-io"]
