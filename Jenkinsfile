pipeline {
  agent {
    node {
      label 'Node'
    }

  }
  stages {
    stage('') {
      steps {
        git(url: 'https://github.com/AdrianoJesus1994/continuum-box-backend.git', branch: 'master', changelog: true)
        sh '''echo "Acionando o docker"
docker-compose up
echo "Finalizado"'''
      }
    }
  }
}