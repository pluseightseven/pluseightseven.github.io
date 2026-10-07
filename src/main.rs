use axum::serve;
use std::net::SocketAddr;
use tokio::net::TcpListener;

mod routes;

#[tokio::main]
async fn main() {
    let app = routes::app();
    let addr = SocketAddr::from(([0, 0, 0, 0], 3000));

    println!("Listening on http://{}", addr);

    let listener = TcpListener::bind(addr)
        .await
        .expect("failed to bind port 3000");

    serve(listener, app)
        .await
        .expect("failed to start server");
}
