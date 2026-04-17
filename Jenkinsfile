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

        stage('Build Backend WAR') {
            steps {
                dir('StudentMangagementAppBackend') {
                    sh 'chmod +x mvnw || true'
                    sh './mvnw clean package -DskipTests || mvn clean package -DskipTests'
                }
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