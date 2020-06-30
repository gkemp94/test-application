# Strapi application

A quick description of your strapi application

## Deployment of Infratrastructure 
Deploying the core infrastructure/network layer
```
aws cloudformation deploy --template-file ./.aws/network.yml --stack-name code-recess-network-layer --capabilities CAPABILITY_NAMED_IAM
```
Deploys VPC, Database & Application
