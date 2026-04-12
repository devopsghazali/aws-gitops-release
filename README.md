# AWS DevSecOps GitOps Release Pipeline

This repo is a complete interview-ready sample for a secure release flow on AWS and Kubernetes.

## What is inside

- A tiny Node.js service with a `/healthz` endpoint
- A Dockerfile for building the runtime image
- A Jenkins pipeline for build, test, scan, and publish
- Kubernetes manifests for deployment and service exposure
- An Argo CD application manifest for GitOps delivery
- A verification script for local smoke testing

## Flow

1. Developer pushes code.
2. Jenkins runs the pipeline.
3. Docker image is built and tagged.
4. Security and manifest checks run.
5. Kubernetes deployment is updated through GitOps.
6. Argo CD reconciles the desired state.

## Run locally

```bash
npm install
npm start
```

Then open `http://localhost:3000`.

## Main files

- `server.js`
- `Dockerfile`
- `Jenkinsfile`
- `k8s/deployment.yaml`
- `k8s/service.yaml`
- `gitops/application.yaml`
- `scripts/verify.sh`
