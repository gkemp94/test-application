### Example Deployment
```
aws cloudformation deploy --template-file ./core.yml --stack-name core-infastructure
```


Outputs Reqs
- ExecutionRole
- VPC
- Cluster
- Public Subnets
- 

### Deploying Core
```
aws cloudformation deploy --template-file ./core.yml --stack-name core-infra
```

``` Deploy Application Layer
aws cloudformation deploy --template-file ./.aws/application.yml --stack-name test-app --capabilities CAPABILITY_NAMED_IAM 
```
