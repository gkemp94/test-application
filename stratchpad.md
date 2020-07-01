```yml
# Database Layer
  RDSSecurityGroup:
    Type: AWS::EC2::SecurityGroup
    Properties:
      GroupDescription: !Sub '${AWS::StackName}-RDSSecurityGroup'
      VpcId: !Ref VPC
  
  RDSSecret:
    Type: AWS::SecretsManager::Secret
    Properties:
      Description: 'This is my rds instance secret'
      GenerateSecretString:
        SecretStringTemplate: '{"username": "admin"}'
        GenerateStringKey: 'password'
        PasswordLength: 16
        ExcludeCharacters: '"@/\'
        
  SecretRDSInstanceAttachment:
    Type: AWS::SecretsManager::SecretTargetAttachment
    DependsOn: RDSCluster
    Properties:
      SecretId: !Ref RDSSecret
      TargetId: !Ref RDSCluster
      TargetType: AWS::RDS::DBCluster

  RDSCluster:
    Type: AWS::RDS::DBCluster
    Properties:
      MasterUsername: !Join ['', ['{{resolve:secretsmanager:', !Ref RDSSecret, ':SecretString:username}}' ]]
      MasterUserPassword: !Join ['', ['{{resolve:secretsmanager:', !Ref RDSSecret, ':SecretString:password}}' ]]
      Engine: aurora
      EngineMode: serverless
      VpcSecurityGroupIds:
        - !Ref RDSSecurityGroup
      ScalingConfiguration:
        AutoPause: true
        MinCapacity: 2
        MaxCapacity: 8
      DBSubnetGroupName:
        Ref: SubnetGroup
        ```
