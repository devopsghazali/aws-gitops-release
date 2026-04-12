# AWS DevSecOps GitOps Release Pipeline

This repo is a hands-on DevOps project for learning how code moves from a Git commit to a secure Kubernetes deployment.

## What you will practice

- Building a small Node.js service
- Packaging it with Docker
- Running a CI pipeline with validation and security checks
- Updating deployment state through GitOps
- Explaining the full release flow in an interview

## Tech stack

- Node.js
- Docker
- Jenkins
- Kubernetes
- Argo CD

## Folder guide

- `server.js` is the sample app with `/` and `/healthz`
- `Dockerfile` builds the runtime image
- `Jenkinsfile` shows build, validate, scan, and handoff stages
- `k8s/deployment.yaml` contains the Kubernetes deployment
- `k8s/service.yaml` exposes the app inside the cluster
- `gitops/application.yaml` defines the Argo CD application
- `scripts/verify.sh` is a quick local smoke test

## How the flow works

1. A developer pushes code to GitHub.
2. Jenkins checks the code and validates the app.
3. A Docker image is built with a versioned tag.
4. Security checks run before release.
5. The GitOps manifest is updated with the approved image tag.
6. Argo CD syncs the Kubernetes cluster to the desired state.

## Run locally

```bash
npm install
npm start
```

Open:

```text
http://localhost:3000
http://localhost:3000/healthz
```

## Docker run

```bash
docker build -t aws-devsecops-gitops-release:local .
docker run --rm -p 3000:3000 aws-devsecops-gitops-release:local
```

## Kubernetes idea

Use the deployment and service manifests in `k8s/` to deploy the app in a namespace like `devsecops`.

## Interview talking points

- The app is intentionally small because the focus is on the release pipeline.
- GitOps keeps deployment state in Git instead of manual cluster changes.
- Immutable image tags make rollback easier.
- Readiness and liveness checks help Kubernetes manage the workload safely.

## Practice tasks

- Add a unit test for the health endpoint.
- Replace the placeholder scan stage with Trivy.
- Add an ingress object and expose the app through NGINX Ingress.
- Add environment variables for dev and prod.
