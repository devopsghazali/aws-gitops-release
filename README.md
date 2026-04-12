# AWS DevSecOps GitOps Release Pipeline

A compact interview-ready project that shows how code moves from Git to a secure deployment on AWS-backed Kubernetes.

## Stack
- Jenkins
- Docker
- SonarQube
- Trivy
- Argo CD
- Kubernetes
- AWS

## What this repo covers
- CI stages for checkout, build, test, and scan
- Docker image creation with immutable tagging
- GitOps-style release handoff into Kubernetes
- Rollback strategy using Git history and tagged releases

## Interview talking points
- Security gates happen before the image is published
- Release state lives in Git, not in manual cluster edits
- Promotion is repeatable and easy to explain in an interview

## Quick flow
1. Push code to GitHub.
2. Jenkins runs build and security checks.
3. Docker image is published with a release tag.
4. GitOps manifest is updated with the approved tag.
5. Argo CD reconciles the Kubernetes deployment.
