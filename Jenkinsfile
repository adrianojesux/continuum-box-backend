pipeline {
  agent {
    node {
      label 'Node'
    }

  }
  stages {
    stage('Checkou e build') {
      steps {
        git(url: 'https://github.com/AdrianoJesus1994/continuum-box-backend.git', branch: 'master', changelog: true)
      }
    }
    stage('Deploy') {
      steps {
        sh 'dokcer rm -f express-mongo || true'
        sh 'dokcer rm -f mongo || true'
        sh 'docker-compose up'
      }
    }
  }
}