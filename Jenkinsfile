pipeline{
    agent any
    stages {
        stage('Run docker compose'){
            steps{
                 dir('/workspace'){
                    sh 'docker-compose down || true'
                    sh "docker-compose up -d --build"
                }
            }
           
        }
        stage('Check containers'){
            steps{
                docker ps
            }
        }
    }
}