pipeline {
    agent any

    stages {
        stage('CI') {
            steps {

                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                git :'https://github.com/ShroukRamadan/CICD-Pipline-with-Jenkins.git', 
                sh """
                docker login -u ${USERNAME} -p ${PASSWORD}
                cd /var/jenkins_home/workspace/CICD-Pipline-with-Jenkins/Backend-App
                docker build . -f dockerfile -t shrouk20180287/node-img:v1.0
                docker push shrouk20180287/node-img:v1.0
                """
                
                }
            }
        }

         stage('CD') {
            steps {
                sh """
                    cd /var/jenkins_home/workspace/CICD-Pipline-with-Jenkins/App-K8s
                    kubectl apply -f .
                    kubectl apply -f .
                    kubectl get all -n app-ns
                """
            }
        }
    }
}


