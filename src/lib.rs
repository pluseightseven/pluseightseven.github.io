pub mod routes;

use axum::Router;

pub fn app() -> Router {
    routes::app()
}
