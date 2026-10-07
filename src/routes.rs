use axum::{
    http::StatusCode,
    response::{Html, IntoResponse},
    routing::get,
    Router,
};
use tower_http::services::ServeDir;

pub fn app() -> Router {
    Router::new()
        .route("/", get(home))
        .route("/settings", get(settings))
        .route("/username", get(username))
        .route("/account", get(account))
        .nest_service("/static", ServeDir::new("static"))
}

async fn home() -> impl IntoResponse {
    Html(render_page(
        "+ eight seven",
        r#"
        <section class="hero">
            <p class="eyebrow">Portfolio / personal site</p>
            <h1>+ eight seven</h1>
            <p>Welcome to the Rust-powered home of the project.</p>
            <div class="actions">
                <a href="/account">Account</a>
                <a href="/settings">Settings</a>
                <a href="/username">Username</a>
            </div>
        </section>
        "#,
    ))
}

async fn settings() -> impl IntoResponse {
    Html(render_page(
        "Settings",
        r#"
        <section class="panel">
            <h2>Settings</h2>
            <p>Application configuration and preferences live here.</p>
            <ul>
                <li>Theme controls</li>
                <li>Notifications</li>
                <li>Security options</li>
            </ul>
        </section>
        "#,
    ))
}

async fn username() -> impl IntoResponse {
    Html(render_page(
        "Username",
        r#"
        <section class="panel">
            <h2>Username</h2>
            <p>Personal identity and profile information.</p>
            <div class="card">
                <strong>Handle:</strong> @pluseightseven
            </div>
        </section>
        "#,
    ))
}

async fn account() -> impl IntoResponse {
    Html(render_page(
        "Account",
        r#"
        <section class="panel">
            <h2>Account</h2>
            <p>Overview of the current account state.</p>
            <div class="card">
                <p>Account status: active</p>
                <p>Role: maintainer</p>
            </div>
        </section>
        "#,
    ))
}

fn render_page(title: &str, content: &str) -> String {
    format!(
        r#"<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <link rel="stylesheet" href="/static/styles.css" />
    </head>
    <body>
        <header>
            <nav class="nav">
                <a href="/">Home</a>
                <a href="/account">Account</a>
                <a href="/username">Username</a>
                <a href="/settings">Settings</a>
            </nav>
        </header>
        <main>
            {content}
        </main>
        <footer>
            <p>&copy; + eight seven</p>
        </footer>
    </body>
</html>"#
    )
}

// Optional: keep a basic 404 page in case a route isn't found.
pub async fn not_found() -> impl IntoResponse {
    (StatusCode::NOT_FOUND, Html("<h1>404 - Page not found</h1>"))
}
