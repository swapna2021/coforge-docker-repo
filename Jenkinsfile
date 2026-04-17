pipeline {
    agent any

    stages {
        stage('Check Docker') {
            steps {
                sh 'pwd'
                sh 'ls -la'
                sh 'docker ps'
            }
        }

        stage('Run docker compose') {
            steps {
                sh 'docker compose down || true'
                sh 'docker compose up -d --build'
            }
        }

        stage('Check containers') {
            steps {
                sh 'docker ps'
            }
        }
    }
}