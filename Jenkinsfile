pipeline {
  agent any

  environment {
    IMAGE_NAME = "devopsghazali/aws-devsecops-gitops-release"
  }

  stages {
    stage("Checkout") {
      steps {
        checkout scm
      }
    }

    stage("Validate") {
      steps {
        sh "node server.js --check"
      }
    }

    stage("Docker Build") {
      steps {
        sh "docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} ."
      }
    }

    stage("Scan") {
      steps {
        sh "echo 'Run Trivy or another scanner here'"
      }
    }

    stage("GitOps Handoff") {
      steps {
        sh "echo 'Update the GitOps manifest with the approved tag'"
      }
    }
  }
}
