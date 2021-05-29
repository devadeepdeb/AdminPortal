pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        echo 'Checkout master branch'
        checkout scm
        dir('webapp') {
          bat 'npm install'
        }
      }
    }
    stage('Build') {
      steps {
        echo 'Building..'
        dir('webapp') {
          //bat 'npm run ng -- build --prod --baseHref=/webapp/ --optimization=true'
          bat 'npm run ng serve --baseHref=/webapp/ -optimization=true'
        }
    }
}
  }
}