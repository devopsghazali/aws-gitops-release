import http from "node:http";

const port = Number(process.env.PORT || 3000);

const app = http.createServer((req, res) => {
  if (req.url === "/healthz") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok", service: "aws-devsecops-gitops-release" }));
    return;
  }

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <html>
        <head><title>AWS DevSecOps GitOps Release</title></head>
        <body style="font-family: Arial, sans-serif; background:#0b0f1a; color:#f8fafc; padding:40px;">
          <h1>AWS DevSecOps GitOps Release Pipeline</h1>
          <p>Sample service used to demonstrate a secure build and GitOps deploy flow.</p>
          <p>Health: <a style="color:#22d3ee" href="/healthz">/healthz</a></p>
        </body>
      </html>
    `);
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "not_found" }));
});

if (process.argv.includes("--check")) {
  console.log("server syntax ok");
  process.exit(0);
}

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
