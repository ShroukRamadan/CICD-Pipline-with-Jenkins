pipeline {
    agent any

    stages {
        stage('CI') {
            steps {

                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                git 'https://github.com/ShroukRamadan/CICD-Pipline-with-Jenkins.git'
                sh """
                docker login -u ${USERNAME} -p ${PASSWORD}
                cd /var/jenkins_home/workspace/Deploy-nodejs-app-on-eks/Backend-App
                docker build . -f dockerfile --network host -t shrouk20180287/node-img:v2.1
                docker push shrouk20180287/node-img:v2.1
                """
                
                }
            }
        }

         stage('CD') {
            steps {
                sh """
                    cd /var/jenkins_home/workspace/Deploy-nodejs-app-on-eks/App-K8s
                    kubectl apply -f ns.yml
                    kubectl apply -f .
                    kubectl get all -n app-ns
                """
            }
        }
    }
}