export const q = `
Q
데이터 엔지니어가 Amazon S3 버킷에서 데이터를 읽도록 AWS Glue 작업을 구성하고 있습니다.
데이터 엔지니어는 필요한 AWS Glue 연결 세부 정보와 관련 IAM 역할을 설정했습니다. 그러나 데이터 엔지니어가 AWS Glue 작업을 실행하려고 하면 데이터 엔지니어는 Amazon S3 VPC 게이트웨이 엔드포인트에 문제가 있음을 나타내는 오류 메시지를 수신합니다. 데이터 엔지니어는 오류를 해결하고 AWS Glue 작업을 S3 버킷에 연결해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?
A. Amazon S3 VPC 게이트웨이 엔드포인트로부터의 인바운드 트래픽을 허용하도록 AWS Glue 보안 그룹을 업데이트하십시오.
B. S3 버킷에 액세스할 수 있는 AWS Glue 작업 권한을 명시적으로 부여하도록 S3 버킷 정책을 구성합니다.
C. AWS Glue 작업 코드를 검토하여 AWS Glue 연결 세부 정보에 정규화된 도메인 이름이 포함되어 있는지 확인하세요.
D. VPC 의 라우팅 테이블에 Amazon S3 VPC 게이트웨이 엔드포인트에 대한 인바운드 및 아웃바운드 경로가 포함되어 있는지 확인합니다.


Answer: D
https://www.examtopics.com/discussions/amazon/view/133045-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
소매 회사에는 Amazon S3 버킷에 고객 데이터 허브가 있습니다. 여러 국가의 직원들이 데이터 허브를 사용하여 전사적 분석을 지원합니다. 거버넌스 팀은 회사의 데이터 분석가가 분석가와 동일한 국가에 있는 고객의 데이터에만 액세스할 수 있도록 해야 합니다.
최소한의 운영 노력으로 이러한 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?
A. 각 국가의 고객 데이터에 대해 별도의 테이블을 만듭니다. 분석가가 서비스를 제공하는 국가를 기반으로 각 분석가에 대한 액세스를 제공합니다.
B. S3 버킷을 AWS Lake Formation 의 데이터 레이크 위치로 등록합니다. Lake Formation 행 수준 보안 기능을 사용하여 회사의 액세스 정책을 시행하십시오.
C. 고객이 거주하는 국가와 가까운 AWS 리전으로 데이터를 이동합니다. 분석가가 서비스를 제공하는 국가를 기반으로 각 분석가에 대한 액세스를 제공합니다.
D. Amazon Redshift 에 데이터를 로드합니다. 각 국가에 대한 뷰(view)를 만듭니다. 각 국가의 데이터에 대한 액세스를 제공하려면 국가별로 별도의 IAM 역할을 생성하세요. 분석가에게 적절한 역할을 할당합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/131714-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 미디어 회사에서는 사용자 행동과 선호도에 따라 고객에게 미디어 콘텐츠를 추천하는
시스템을 개선하려고 합니다. 추천 시스템을 개선하려면 회사는 타사 데이터 세트의 통찰력을
회사의 기존 분석 플랫폼에 통합해야 합니다.
회사는 타사 데이터 세트를 통합하는 데 필요한 노력과 시간을 최소화하려고 합니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. API 호출을 사용하여 AWS Data Exchange 의 타사 데이터 세트에 액세스하고 통합합니다.
B. API 호출을 사용하여 AWS DataSync 에서 타사 데이터 세트에 액세스하고 통합합니다.
C. Amazon Kinesis Data Streams 를 사용하여 AWS CodeCommit 리포지토리의 타사 데이터
세트에 액세스하고 통합합니다.
D. Amazon Kinesis Data Streams 를 사용하여 Amazon Elastic Container Registry(Amazon
ECR)의 타사 데이터 세트에 액세스하고 통합합니다.



Answer: A
https://www.examtopics.com/discussions/amazon/view/131706-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
금융회사에서는 데이터 메시를 구현하려고 합니다. 데이터 메시는 중앙 집중식 데이터 거버넌스,
데이터 분석 및 데이터 액세스 제어를 지원해야 합니다. 이 회사는 데이터 카탈로그와 ETL(추출,
변환 및 로드) 작업에 AWS Glue 를 사용하기로 결정했습니다.
데이터 메시를 구현하는 AWS 서비스 조합은 무엇입니까? (2 개 선택)
A. 데이터 저장을 위해 Amazon Aurora 를 사용하세요. 데이터 분석을 위해 Amazon Redshift
프로비저닝된 클러스터를 사용합니다.
B. 데이터 저장을 위해 Amazon S3 를 사용하십시오. 데이터 분석에는 Amazon Athena 를
사용합니다.
C. 중앙 집중식 데이터 거버넌스 및 액세스 제어를 위해 AWS Glue DataBrew 를 사용합니다.
D. 데이터 저장을 위해 Amazon RDS 를 사용하십시오. 데이터 분석에는 Amazon EMR 을
사용합니다.
E. 중앙 집중식 데이터 거버넌스 및 액세스 제어를 위해 AWS Lake Formation 을 사용합니다.



Answer: B, E
https://www.examtopics.com/discussions/amazon/view/131467-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 많은 AWS Lambda 함수가 사용하는 데이터 형식 지정 프로세스를 수행하는
사용자 지정 Python 스크립트를 유지 관리합니다. 데이터 엔지니어가 Python 스크립트를
수정해야 하는 경우 데이터 엔지니어는 모든 Lambda 함수를 수동으로 업데이트해야 합니다.
데이터 엔지니어는 Lambda 함수를 업데이트하는 데 덜 수동적인 방법이 필요합니다.
이 요구 사항을 충족하는 솔루션은 무엇입니까?
A. 공유 Amazon S3 버킷의 실행 컨텍스트 객체에 사용자 지정 Python 스크립트에 대한
포인터를 저장합니다.
B. 사용자 정의 Python 스크립트를 Lambda 계층으로 패키징합니다. Lambda 계층을 Lambda
함수에 적용합니다.
C. 공유 Amazon S3 버킷의 환경 변수에 사용자 지정 Python 스크립트에 대한 포인터를
저장합니다.
D. 각 Lambda 함수에 동일한 별칭을 할당합니다. 함수의 별칭을 지정하여 도달 Lambda
함수를 호출합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/131707-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사는 AWS Glue 에서 ETL(추출, 변환 및 로드) 데이터 파이프라인을 생성했습니다. 데이터
엔지니어는 Microsoft SQL Server 에 있는 테이블을 크롤링해야 합니다. 데이터 엔지니어는
크롤링 출력을 추출, 변환하고 Amazon S3 버킷에 로드해야 합니다. 데이터 엔지니어는 데이터
파이프라인도 조정해야 합니다.
이러한 요구 사항을 가장 비용 효율적으로 충족하는 AWS 서비스 또는 기능은 무엇입니까?
A. AWS Step Functions
B. AWS Glue workflows
C. AWS Glue Studio
D. Amazon Managed Workflows for Apache Airflow (Amazon MWAA)



Answer: B
https://www.examtopics.com/discussions/amazon/view/131469-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
금융 서비스 회사는 Amazon Redshift 에 금융 데이터를 저장합니다. 데이터 엔지니어는 웹 기반
거래 애플리케이션을 지원하기 위해 금융 데이터에 대해 실시간 쿼리를 실행하려고 합니다.
데이터 엔지니어는 거래 애플리케이션 내에서 쿼리를 실행하려고 합니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. Amazon Redshift 에 대한 WebSocket 연결을 설정합니다.
B. Amazon Redshift 데이터 API 를 사용합니다.
C. Amazon Redshift 에 대한 JDBC(Java Database Connectivity) 연결을 설정합니다.
D. 자주 액세스하는 데이터를 Amazon S3 에 저장합니다. Amazon S3 Select 를 사용하여 쿼리를
실행합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/131470-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사는 Amazon S3 에 있는 데이터에 대한 일회성 쿼리를 위해 Amazon Athena 를 사용합니다.
회사에는 여러 가지 사용 사례가 있습니다. 회사는 동일한 AWS 계정에 있는 사용자, 팀 및
애플리케이션 간의 쿼리 프로세스와 쿼리 기록에 대한 액세스를 분리하기 위한 권한 제어를
구현해야 합니다.
어떤 솔루션이 이러한 요구 사항을 충족합니까?
A. 각 사용 사례에 대해 S3 버킷을 생성합니다. 적절한 개별 IAM 사용자에게 권한을 부여하는
S3 버킷 정책을 생성합니다. S3 버킷 정책을 S3 버킷에 적용합니다.
B. 각 사용 사례에 대해 Athena 작업 그룹을 생성합니다. 작업그룹에 태그를 적용합니다.
태그를 사용하여 작업 그룹에 적절한 권한을 적용하는 IAM 정책을 생성합니다.
C. 각 사용 사례에 대한 IAM 역할을 생성합니다. 각 사용 사례의 역할에 적절한 권한을
할당합니다. 역할을 Athena 와 연결합니다.
D. 각 사용 사례에 대해 적절한 개별 IAM 사용자에게 권한을 부여하는 AWS Glue 데이터
카탈로그 리소스 정책을 생성합니다. Athena 가 사용하는 특정 테이블에 리소스 정책을
적용합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/131471-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 매일 일련의 AWS Glue 작업을 실행하는 워크플로를 예약해야 합니다.
데이터 엔지니어는 특정 시간에 Glue 작업을 실행하거나 완료할 필요가 없습니다.
가장 비용 효율적인 방식으로 Glue 작업을 실행하는 솔루션은 무엇입니까?
A. Glue 작업 속성에서 FLEX 실행 클래스를 선택합니다.
B. Glue 작업 속성에서 스팟 인스턴스 유형을 사용합니다.
C. Glue 작업 속성에서 STANDARD 실행 클래스를 선택합니다.
D. Glue 작업 속성의 GlueVersion 필드에서 최신 버전을 선택합니다.



Answer: A
https://www.examtopics.com/discussions/amazon/view/132628-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 데이터 형식을 .csv 에서 Apache Parquet 로 변환하는 AWS Lambda 함수를
생성해야 합니다. Lambda 함수는 사용자가 .csv 파일을 Amazon S3 버킷에 업로드하는
경우에만 실행되어야 합니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. 이벤트 유형이 s3:ObjectCreated:*인 S3 이벤트 알림을 생성합니다. 접미사에 .csv 가 포함된
경우에만 알림을 생성하려면 필터 규칙을 사용합니다. Lambda 함수의 Amazon 리소스
이름(ARN)을 이벤트 알림 대상으로 설정합니다.
B. 태그가 .csv 로 설정된 객체에 대해 이벤트 유형이 s3:ObjectTagged:*인 S3 이벤트 알림을
생성합니다. Lambda 함수의 Amazon 리소스 이름(ARN)을 이벤트 알림 대상으로 설정합니다.
C. 이벤트 유형이 s3:*인 S3 이벤트 알림을 생성합니다. 접미사에 .csv 가 포함된 경우에만
알림을 생성하려면 필터 규칙을 사용합니다. Lambda 함수의 Amazon 리소스 이름(ARN)을
이벤트 알림 대상으로 설정합니다.
D. 이벤트 유형이 s3:ObjectCreated:*인 S3 이벤트 알림을 생성합니다. 접미사에 .csv 가 포함된
경우에만 알림을 생성하려면 필터 규칙을 사용합니다. Amazon Simple 알림 서비스(Amazon SNS)
주제를 이벤트 알림 대상으로 설정합니다. SNS 주제에 Lambda 함수를 구독합니다.



Answer: A
https://www.examtopics.com/discussions/amazon/view/131472-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어가 더 빠르게 완료하려면 Amazon Athena 쿼리가 필요합니다. 데이터
엔지니어는 Athena 쿼리에서 사용하는 모든 파일이 현재 압축되지 않은 .csv 형식으로 저장되어
있음을 확인합니다. 또한 데이터 엔지니어는 사용자가 특정 열을 선택하여 대부분의 쿼리를
수행한다는 사실도 알아냈습니다.
Athena 쿼리 성능을 가장 빠르게 향상시키는 솔루션은 무엇입니까?
A. 데이터 형식을 .csv 에서 JSON 형식으로 변경합니다. Snappy 압축을 적용합니다.
B. Snappy 압축을 사용하여 .csv 파일을 압축합니다.
C. 데이터 형식을 .csv 에서 Apache Parquet 로 변경합니다. Snappy 압축을 적용합니다.
D. gzip 압축을 사용하여 .csv 파일을 압축합니다.



Answer: C
https://www.examtopics.com/discussions/amazon/view/131473-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 제조 회사는 운영 효율성을 모니터링하고 향상시키기 위해 공장 현장에서 센서 데이터를
수집합니다. 이 회사는 Amazon Kinesis Data Streams 를 사용하여 센서가 수집하는 데이터를
데이터 스트림에 게시합니다. 그런 다음 Amazon Kinesis Data Firehose 가 Amazon S3 버킷에
데이터를 씁니다.
회사는 제조 시설의 대형 화면에 운영 효율성을 실시간으로 표시해야 합니다.
가장 낮은 대기 시간으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. Apache Flink 용 Amazon Managed Service(이전의 Amazon Kinesis Data Analytics)를 사용하여
센서 데이터를 처리하십시오. Apache Flink 용 커넥터를 사용하여 Amazon Timestream
데이터베이스에 데이터를 씁니다. Timestream 데이터베이스를 소스로 사용하여 Grafana
대시보드를 생성합니다.
B. 새 객체가 생성되면 AWS Lambda 함수에 알림을 보내도록 S3 버킷을 구성합니다. Lambda
함수를 사용하여 Amazon Aurora 에 데이터를 게시합니다. Aurora 를 소스로 사용하여 Amazon QuickSight 대시보드를 생성하십시오.
C. Apache Flink 용 Amazon Managed Service(이전의 Amazon Kinesis Data Analytics)를 사용하여
센서 데이터를 처리합니다. 새로운 Data Firehose 전송 스트림을 생성하여 Amazon Timestream
데이터베이스에 직접 데이터를 게시합니다. Timestream 데이터베이스를 소스로 사용하여
Amazon QuickSight 대시보드를 생성합니다.
D. AWS Glue 북마크를 사용하여 S3 버킷의 센서 데이터를 실시간으로 읽습니다. Amazon
Timestream 데이터베이스에 데이터를 게시합니다. Timestream 데이터베이스를 소스로 사용하여
Grafana 대시보드를 생성합니다.



Answer: A
https://www.examtopics.com/discussions/amazon/view/131474-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사는 투자 포트폴리오의 재무 성과에 대한 일일 기록을 Amazon S3 버킷에 .csv 형식으로
저장합니다. 데이터 엔지니어는 AWS Glue 크롤러를 사용하여 S3 데이터를 크롤링합니다.
데이터 엔지니어는 AWS Glue 데이터 카탈로그에서 매일 S3 데이터에 액세스할 수 있도록 해야
합니다.
어떤 솔루션이 이러한 요구 사항을 충족합니까?
A. AmazonS3FullAccess 정책을 포함하는 IAM 역할을 생성합니다. 역할을 크롤러와 연결합니다.
소스 데이터의 S3 버킷 경로를 크롤러의 데이터 저장소로 지정합니다. 크롤러를 실행하는 일일
일정을 만듭니다. 출력 대상을 기존 S3 버킷의 새 경로로 구성합니다.
B. AWSGlueServiceRole 정책을 포함하는 IAM 역할을 생성합니다. 역할을 크롤러와 연결합니다.
소스 데이터의 S3 버킷 경로를 크롤러의 데이터 저장소로 지정합니다. 크롤러를 실행하는 일일
일정을 만듭니다. 출력에 대한 데이터베이스 이름을 지정합니다.
C. AmazonS3FullAccess 정책을 포함하는 IAM 역할을 생성합니다. 역할을 크롤러와 연결합니다.
소스 데이터의 S3 버킷 경로를 크롤러의 데이터 저장소로 지정합니다. 매일 크롤러를 실행하기
위해 데이터 처리 장치(DPU)를 할당합니다. 출력에 대한 데이터베이스 이름을 지정합니다.
D. AWSGlueServiceRole 정책을 포함하는 IAM 역할을 생성합니다. 역할을 크롤러와 연결합니다.
소스 데이터의 S3 버킷 경로를 크롤러의 데이터 저장소로 지정합니다. 매일 크롤러를 실행하기
위해 데이터 처리 장치(DPU)를 할당합니다. 출력 대상을 기존 S3 버킷의 새 경로로 구성합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/131709-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사는 하루가 끝날 때마다 Amazon Redshift 테이블에 매일의 거래 데이터를 로드합니다.
회사에서는 로드된 테이블과 아직 로드해야 하는 테이블을 추적할 수 있는 기능을 원합니다.
데이터 엔지니어는 Amazon DynamoDB 테이블에 Redshift 테이블의 로드 상태를 저장하려고
합니다. 데이터 엔지니어는 AWS Lambda 함수를 생성하여 로드 상태의 세부 정보를
DynamoDB 에 게시합니다.
데이터 엔지니어는 DynamoDB 테이블에 로드 상태를 기록하기 위해 어떻게 Lambda 함수를
호출해야 합니까?
A. 두 번째 Lambda 함수를 사용하여 Amazon CloudWatch 이벤트를 기반으로 첫 번째 Lambda
함수를 호출합니다.
B. Amazon Redshift Data API 를 사용하여 Amazon EventBridge 에 이벤트를 게시합니다. Lambda
함수를 호출하도록 EventBridge 규칙을 구성합니다.
C. Amazon Redshift Data API 를 사용하여 Amazon Simple Queue Service(Amazon SQS)
대기열에 메시지를 게시합니다. Lambda 함수를 호출하도록 SQS 대기열을 구성합니다.
D. 두 번째 Lambda 함수를 사용하여 AWS CloudTrail 이벤트를 기반으로 첫 번째 Lambda
함수를 호출합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/131675-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 온프레미스 데이터 센터에서 Amazon S3 버킷으로 5TB 의 데이터를 안전하게
전송해야 합니다. 매일 약 5%의 데이터가 변경됩니다. 데이터 업데이트는 S3 버킷에
정기적으로 확산되어야 합니다. 데이터에는 다양한 형식의 파일이 포함됩니다. 데이터
엔지니어는 전송 프로세스를 자동화해야 하며 프로세스가 정기적으로 실행되도록 예약해야
합니다.
데이터 엔지니어는 운영상 가장 효율적인 방식으로 데이터를 전송하기 위해 어떤 AWS 서비스를
사용해야 합니까?
A. AWS DataSync
B. AWS Glue
C. AWS Direct Connect
D. Amazon S3 Transfer Acceleration



Answer: A
https://www.examtopics.com/discussions/amazon/view/131676-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사에서는 온프레미스 Microsoft SQL Server 데이터베이스를 사용하여 금융 거래 데이터를
저장합니다. 회사는 매월 말에 온프레미스 데이터베이스의 거래 데이터를 AWS 로
마이그레이션합니다. 회사는 온프레미스 데이터베이스에서 SQL Server 용 Amazon RDS
데이터베이스로 데이터를 마이그레이션하는 비용이 최근 증가했다는 사실을 확인했습니다.
회사는 데이터를 AWS 로 마이그레이션하기 위해 비용 효율적인 솔루션이 필요합니다. 솔루션은
데이터베이스에 액세스하는 애플리케이션에 대한 다운타임을 최소화해야 합니다.
이러한 요구 사항을 충족하려면 회사에서 어떤 AWS 서비스를 사용해야 합니까?
A. AWS Lambda
B. AWS Database Migration Service (AWS DMS)
C. AWS Direct Connect
D. AWS DataSync



Answer: B
https://www.examtopics.com/discussions/amazon/view/131677-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 AWS Glue ETL(추출, 변환 및 로드) 작업을 사용하여 AWS 에서 데이터
파이프라인을 구축하고 있습니다. 데이터 엔지니어는 Amazon RDS 및 MongoDB 의 데이터를
처리하고, 변환을 수행하고, 분석을 위해 변환된 데이터를 Amazon Redshift 에 로드해야 합니다.
데이터 업데이트는 매시간 발생해야 합니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 작업 조합은 무엇입니까? (2 개 선택)
A. 매시간 ETL 작업을 실행하도록 AWS Glue 트리거를 구성합니다.
B. AWS Glue DataBrew 를 사용하여 분석용 데이터를 정리하고 준비합니다.
C. AWS Lambda 함수를 사용하여 매시간 ETL 작업을 예약하고 실행합니다.
D. AWS Glue 연결을 사용하여 데이터 소스와 Amazon Redshift 간의 연결을 설정합니다.
E. Redshift Data API 를 사용하여 변환된 데이터를 Amazon Redshift 에 로드합니다.



Answer: A, D
https://www.examtopics.com/discussions/amazon/view/131679-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사는 RA3 노드에서 실행되는 Amazon Redshift 클러스터를 사용합니다. 회사는 수요에
맞춰 읽기 및 쓰기 용량을 확장하려고 합니다. 데이터 엔지니어는 동시성 확장을 활성화하는
솔루션을 식별해야 합니다.
이 요구 사항을 충족하는 솔루션은 무엇입니까?
A. Redshift Serverless 작업 그룹에 대한 워크로드 관리(WLM)에서 동시성 확장을 활성화합니다.
B. Redshift 클러스터의 워크로드 관리(WLM) 대기열 수준에서 동시성 확장을 활성화합니다.
C. 새로운 Redshift 클러스터를 생성하는 동안 설정에서 동시성 확장을 활성화합니다.
D. Redshift 클러스터의 일일 사용 할당량에 대한 동시성 확장을 활성화합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/131680-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 매일 실행되는 일련의 Amazon Athena 쿼리를 조율해야 합니다. 각 쿼리는
15 분 이상 실행될 수 있습니다.
이러한 요구 사항을 가장 비용 효율적으로 충족하는 단계 조합은 무엇입니까? (2 개 선택)
A. AWS Lambda 함수와 Athena Boto3 클라이언트 start_query_execution API 호출을 사용하여
프로그래밍 방식으로 Athena 쿼리를 호출합니다.
B. AWS Step Functions 워크플로를 생성하고 두 가지 상태를 추가합니다. Lambda 함수 앞에 첫
번째 상태를 추가합니다. 두 번째 상태를 대기 상태로 구성하여 Athena Boto3
get_query_execution API 호출을 사용하여 Athena 쿼리가 완료되었는지 주기적으로 확인합니다.
현재 쿼리 실행이 완료되면 다음 쿼리를 호출하도록 워크플로를 구성합니다.
C. AWS Glue Python 셸 작업과 Athena Boto3 클라이언트 start_query_execution API 호출을
사용하여 Athena 쿼리를 프로그래밍 방식으로 호출합니다.
D. AWS Glue Python 셸 스크립트를 사용하여 5 분마다 확인하는 절전 타이머를 실행하여 현재
Athena 쿼리 실행이 성공적으로 완료되었는지 확인합니다. 현재 쿼리 실행이 완료되면 다음
쿼리를 호출하도록 Python 셸 스크립트를 구성합니다.
E. Amazon Managed Workflows for Apache Airflow(Amazon MWAA)를 사용하여 AWS Batch 에서
Athena 쿼리를 조정합니다.



Answer: A, B
https://www.examtopics.com/discussions/amazon/view/131683-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/
B, E??


Q
회사에서 온프레미스 워크로드를 AWS 로 마이그레이션하고 있습니다. 회사는 전반적인 운영
오버헤드를 줄이고 싶어합니다. 또한 회사는 서버리스 옵션도 살펴보고 싶어합니다.
회사의 현재 워크로드는 Apache Pig, Apache Oozie, Apache Spark, Apache Hbase 및 Apache
Flink 를 사용합니다. 온프레미스 워크로드는 페타바이트 규모의 데이터를 몇 초 만에 처리합니다.
회사는 AWS 로 마이그레이션한 후에도 유사하거나 더 나은 성능을 유지해야 합니다.
이러한 요구 사항을 충족하는 ETL(추출, 변환 및 로드) 서비스는 무엇입니까?
A. AWS Glue
B. Amazon EMR
C. AWS Lambda
D. Amazon Redshift



Answer: B
https://www.examtopics.com/discussions/amazon/view/131684-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 AWS 서비스를 사용하여 데이터 세트를 Amazon S3 데이터 레이크로
수집해야 합니다. 데이터 엔지니어는 데이터 세트를 프로파일링하고 데이터 세트에 개인 식별
정보(PII)가 포함되어 있음을 발견합니다. 데이터 엔지니어는 데이터 세트를 프로파일링하고
PII 를 난독화하는 솔루션을 구현해야 합니다.
최소한의 운영 노력으로 이 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?
A. Amazon Kinesis Data Firehose 전송 스트림을 사용하여 데이터 세트를 처리합니다. PII 를
식별하기 위해 AWS Lambda 변환 함수를 생성합니다. AWS SDK 를 사용하여 PII 를 난독화합니다.
S3 데이터 레이크를 전송 스트림의 대상으로 설정합니다.
B. AWS Glue Studio 에서 PII 감지 변환을 사용하여 PII 를 식별합니다. PII 를 난독화합니다. AWS
Step Functions 상태 시스템을 사용하여 데이터 파이프라인을 조정하여 데이터를 S3 데이터
레이크로 수집합니다.
C. AWS Glue Studio 에서 PII 감지 변환을 사용하여 PII 를 식별합니다. AWS Glue 데이터
품질에서 PII 를 난독화하는 규칙을 생성합니다. AWS Step Functions 상태 시스템을 사용하여
데이터 파이프라인을 조정하여 데이터를 S3 데이터 레이크로 수집합니다.
D. 데이터 세트를 Amazon DynamoDB 로 수집합니다. DynamoDB 테이블에서 PII 를 식별 및
난독화하고 데이터를 변환하는 AWS Lambda 함수를 생성합니다. 동일한 Lambda 함수를
사용하여 데이터를 S3 데이터 레이크로 수집합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/132653-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사는 회사 운영 데이터베이스의 데이터를 Amazon S3 기반 데이터 레이크로 수집하는 여러
추출, 변환 및 로드(ETL) 워크플로를 유지 관리합니다. ETL 워크플로는 AWS Glue 및 Amazon
EMR 을 사용하여 데이터를 처리합니다.
회사는 자동화된 오케스트레이션(조정)을 제공하고 수동 작업을 최소화하기 위해 기존
아키텍처를 개선하려고 합니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. AWS Glue workflows
B. AWS Step Functions tasks
C. AWS Lambda functions
D. Amazon Managed Workflows for Apache Airflow (Amazon MWAA) workflows



Answer: B
https://www.examtopics.com/discussions/amazon/view/131710-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q23
현재 한 회사는 S3 Standard 스토리지 클래스를 사용하여 Amazon S3 에 모든 데이터를
저장하고 있습니다.
데이터 엔지니어가 데이터 액세스 패턴을 조사하여 추세를 파악했습니다. 처음 6 개월 동안
대부분의 데이터 파일은 매일 여러 번 액세스됩니다. 6 개월에서 2 년 사이에는 대부분의 데이터
파일에 한 달에 한두 번 액세스됩니다. 2 년이 지나면 데이터 파일은 1 년에 한두 번만
액세스됩니다.
데이터 엔지니어는 S3 수명 주기 정책을 사용하여 새로운 데이터 스토리지 규칙을 개발해야
합니다. 새로운 스토리지 솔루션은 계속해서 고가용성을 제공해야 합니다.
가장 비용 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. 6 개월 후에 객체를 S3 One Zone-Infrequent Access(S3 One Zone-IA)로 전환합니다. 2 년
후에 객체를 S3 Glacier 유연한 검색으로 전송합니다.
B. 6 개월 후에 객체를 S3 Standard-Infrequent Access(S3 Standard-IA)로 전환합니다. 2 년 후에
객체를 S3 Glacier 유연한 검색으로 전송합니다.
C. 6 개월 후에 객체를 S3 Standard-Infrequent Access(S3 Standard-IA)로 전환합니다. 2 년 후에
객체를 S3 Glacier Deep Archive 로 전송합니다.
D. 6 개월 후에 객체를 S3 One Zone-Infrequent Access(S3 One Zone-IA)로 전환합니다. 2 년
후에 객체를 S3 Glacier Deep Archive 로 전송합니다.



Answer: C
https://www.examtopics.com/discussions/amazon/view/132654-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사는 중요한 분석 작업을 지원하기 위해 ETL(추출, 변환 및 로드) 작업에 사용하는 Amazon
Redshift 프로비저닝 클러스터를 유지 관리합니다. 회사 내의 영업팀은 영업팀이 비즈니스
인텔리전스(BI) 작업에 사용하는 Redshift 클러스터를 유지 관리합니다.
영업팀은 최근 팀이 주간 요약 분석 작업을 수행할 수 있도록 ETL Redshift 클러스터에 있는
데이터에 대한 액세스를 요청했습니다. 영업팀은 ETL 클러스터의 데이터를 영업팀의 BI
클러스터에 있는 데이터와 결합해야 합니다.
회사에는 중요한 분석 작업을 중단하지 않고 ETL 클러스터 데이터를 영업팀과 공유할 수 있는
솔루션이 필요합니다. 솔루션은 ETL 클러스터의 컴퓨팅 리소스 사용을 최소화해야 합니다.
어떤 솔루션이 이러한 요구 사항을 충족합니까?
A. Redshift 데이터 공유를 사용하여 영업팀 BI 클러스터를 ETL 클러스터의 소비자로 설정합니다.
B. 영업팀의 요구 사항에 따라 구체화된 뷰(view)를 만듭니다. 영업팀에 ETL 클러스터에 대한
직접 액세스 권한을 부여합니다.
C. 영업팀의 요구 사항에 따라 데이터베이스 뷰(view)를 만듭니다. 영업팀에 ETL 클러스터에
대한 직접 액세스 권한을 부여합니다.
D. 매주 ETL 클러스터의 데이터 복사본을 Amazon S3 버킷으로 언로드합니다. ETL 클러스터의
콘텐츠를 기반으로 Amazon Redshift Spectrum 테이블을 생성합니다.



Answer: A
https://www.examtopics.com/discussions/amazon/view/131711-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 일회성 분석 작업을 수행하기 위해 여러 소스의 데이터를 결합해야 합니다.
데이터는 Amazon DynamoDB, Amazon RDS, Amazon Redshift 및 Amazon S3 에 저장됩니다.
이 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?
A. 모든 소스에서 읽으려면 Amazon EMR 프로비저닝 클러스터를 사용하십시오. Apache Spark 를
사용하여 데이터를 결합하고 분석을 수행합니다.
B. DynamoDB, Amazon RDS 및 Amazon Redshift 의 데이터를 Amazon S3 에 복사합니다. S3
파일에서 직접 Amazon Athena 쿼리를 실행합니다.
C. Amazon Athena Federated Query 를 사용하여 모든 데이터 소스의 데이터를 조인합니다.
D. Redshift Spectrum 을 사용하여 Redshift 에서 직접 DynamoDB, Amazon RDS 및 Amazon
S3 의 데이터를 쿼리합니다.



Answer: C
https://www.examtopics.com/discussions/amazon/view/131712-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사는 Apache Spark 작업을 실행하는 프로비저닝된 Amazon EMR 클러스터를 사용하여 빅
데이터 분석을 수행할 계획입니다. 회사는 높은 신뢰성을 요구합니다. 빅 데이터 팀은 Amazon
EMR 에서 비용 최적화된 장기 실행 워크로드를 실행하기 위한 모범 사례를 따라야 합니다. 팀은
회사의 현재 성과 수준을 유지할 수 있는 솔루션을 찾아야 합니다.
이러한 요구 사항을 가장 비용 효율적으로 충족할 수 있는 리소스 조합은 무엇입니까? (2 개
선택)
A. HDFS(Hadoop 분산 파일 시스템)를 영구 데이터 저장소로 사용하십시오.
B. Amazon S3 를 영구 데이터 저장소로 사용하십시오.
C. 코어 노드와 작업 노드에 x86 기반 인스턴스를 사용합니다.
D. 코어 노드와 작업 노드에 Graviton 인스턴스를 사용합니다.
E. 모든 기본 노드에 스팟 인스턴스를 사용합니다.



Answer: B, D
https://www.examtopics.com/discussions/amazon/view/131713-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사에서는 실시간 분석 기능을 구현하려고 합니다. 이 회사는 Amazon Kinesis Data Streams 및
Amazon Redshift 를 사용하여 초당 수 기가바이트의 속도로 스트리밍 데이터를 수집하고
처리하려고 합니다. 회사는 기존 비즈니스 인텔리전스(BI) 및 분석 도구를 사용하여 실시간에
가까운 통찰력을 얻고자 합니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. Kinesis Data Streams 를 사용하여 Amazon S3 에서 데이터를 준비하십시오. COPY 명령을
사용하여 Amazon S3 의 데이터를 Amazon Redshift 로 직접 로드하면 데이터를 실시간 분석에
즉시 사용할 수 있습니다.
B. SQL 쿼리를 사용하여 Kinesis Data Streams 의 데이터에 액세스합니다. 스트림 상단에 직접
구체화된 뷰(view)를 생성합니다. 가장 최근의 스트림 데이터를 쿼리하려면 구체화된 뷰(view)를
정기적으로 새로 고치세요.
C. Amazon Redshift 에서 외부 스키마를 생성하여 Kinesis Data Streams 의 데이터를 Amazon
Redshift 객체에 매핑합니다. 스트림에서 데이터를 읽으려면 구체화된 뷰(view)를 만듭니다.
구체화된 뷰(view)를 자동 새로 고침으로 설정합니다.
D. Kinesis Data Streams 를 Amazon Kinesis Data Firehose 에 연결합니다. Kinesis Data
Firehose 를 사용하여 Amazon S3 에 데이터를 준비합니다. COPY 명령을 사용하여 Amazon S3 의
데이터를 Amazon Redshift 의 테이블에 로드합니다.



Answer: C
https://www.examtopics.com/discussions/amazon/view/133048-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사는 Amazon QuickSight 대시보드를 사용하여 회사 애플리케이션 중 하나의 사용량을
모니터링합니다. 회사는 AWS Glue 작업을 사용하여 대시보드용 데이터를 처리합니다. 회사는
단일 Amazon S3 버킷에 데이터를 저장합니다. 회사는 매일 새로운 데이터를 추가합니다.
데이터 엔지니어는 시간이 지남에 따라 대시보드 쿼리가 느려지는 것을 발견했습니다. 데이터
엔지니어는 쿼리 속도 저하의 근본 원인이 장기 실행 AWS Glue 작업이라고 판단합니다.
AWS Glue 작업의 성능을 향상시키기 위해 데이터 엔지니어는 어떤 조치를 취해야 합니까? (2 개
선택)
A. S3 버킷에 있는 데이터를 분할합니다. 데이터를 연도, 월, 일별로 정리합니다.
B. 작업자 유형을 확장하여 AWS Glue 인스턴스 크기를 늘립니다.
C. AWS Glue 스키마를 DynamicFrame 스키마 클래스로 변환합니다.
D. 작업이 매일 절반의 횟수로 실행되도록 AWS Glue 작업 예약 빈도를 조정합니다.
E. 모든 S3 기능에 대한 액세스 권한을 부여하도록 AWS Glue 에 대한 액세스 권한을 부여하는
IAM 역할을 수정합니다.



Answer: A, B
https://www.examtopics.com/discussions/amazon/view/132734-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 AWS Step Functions 를 사용하여 오케스트레이션 워크플로를 설계해야
합니다. 워크플로우는 대규모 데이터 파일 모음을 병렬로 처리하고 각 파일에 특정 변환을
적용해야 합니다.
데이터 엔지니어가 이러한 요구 사항을 충족하려면 어떤 Step Functions 상태를 사용해야
합니까?
A. 병렬 상태 (Parallel state)
B. 선택 상태 (Choice state)
C. 지도 상태 (Map state)
D. 대기 상태 (Wait state)



Answer: C
https://www.examtopics.com/discussions/amazon/view/132773-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사가 레거시 애플리케이션을 Amazon S3 기반 데이터 레이크로 마이그레이션하고 있습니다.
데이터 엔지니어가 레거시 애플리케이션과 연결된 데이터를 검토했습니다. 데이터 엔지니어는
레거시 데이터에 일부 중복된 정보가 포함되어 있음을 발견했습니다.
데이터 엔지니어는 레거시 애플리케이션 데이터에서 중복 정보를 식별하고 제거해야 합니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. Python 에서 사용자 지정 ETL(추출, 변환 및 로드) 작업을 작성합니다. 데이터 중복 제거를
수행하려면 Pandas 라이브러리를 가져와 DataFrame.drop_duplicates() 함수를 사용하세요.
B. AWS Glue ETL(추출, 변환 및 로드) 작업을 작성합니다. FindMatches 기계 학습(ML) 변환을
사용하여 데이터 중복 제거를 수행하도록 데이터를 변환합니다.
C. Python 에서 사용자 지정 ETL(추출, 변환 및 로드) 작업을 작성합니다. Python 중복 제거
라이브러리를 가져옵니다. 데이터 중복 제거를 수행하려면 중복 제거 라이브러리를
사용하십시오.
D. AWS Glue ETL(추출, 변환 및 로드) 작업을 작성합니다. Python 중복 제거 라이브러리를
가져옵니다. 데이터 중복 제거를 수행하려면 중복 제거 라이브러리를 사용하십시오.



Answer: B
https://www.examtopics.com/discussions/amazon/view/132774-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사에서 분석 솔루션을 구축하고 있습니다. 이 솔루션은 데이터 레이크 스토리지로 Amazon
S3 를 사용하고 데이터 웨어하우스로 Amazon Redshift 를 사용합니다. 회사는 Amazon Redshift
Spectrum 을 사용하여 Amazon S3 에 있는 데이터를 쿼리하려고 합니다.
가장 빠른 쿼리를 제공하는 작업은 무엇입니까? (2 개를 선택하세요.)
A. gzip 압축을 사용하여 개별 파일을 1GB 에서 5GB 사이의 크기로 압축합니다.
B. 컬럼형 저장 파일 형식을 사용합니다.
C. 가장 일반적인 쿼리 조건자를 기반으로 데이터를 분할합니다.
D. 데이터를 10KB 미만의 파일로 분할합니다.
E. 분할이 불가능한 파일 형식을 사용하십시오.



Answer: B, C
https://www.examtopics.com/discussions/amazon/view/132737-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q32
회사는 Amazon RDS 를 사용하여 거래 데이터를 저장합니다. 회사는 프라이빗 서브넷에서 RDS
DB 인스턴스를 실행합니다. 개발자는 DB 인스턴스에 데이터를 삽입, 업데이트 또는 삭제하기
위한 기본 설정으로 AWS Lambda 함수를 작성했습니다.
개발자는 공용 인터넷을 사용하지 않고 DB 인스턴스에 비공개로 연결할 수 있는 기능을
Lambda 함수에 제공해야 합니다.
최소한의 운영 오버헤드로 이 요구 사항을 충족하는 단계 조합은 무엇입니까? (2 개 선택)
A. DB 인스턴스에 대한 퍼블릭 액세스 설정을 활성화합니다.
B. 데이터베이스 포트에서 Lambda 함수 호출만 허용하도록 DB 인스턴스의 보안 그룹을
업데이트합니다.
C. DB 인스턴스가 사용하는 것과 동일한 서브넷에서 실행되도록 Lambda 함수를 구성합니다.
D. 동일한 보안 그룹을 Lambda 함수와 DB 인스턴스에 연결합니다. 데이터베이스 포트를 통한
액세스를 허용하는 자체 참조 규칙을 포함합니다.
E. 데이터베이스 포트를 통한 액세스를 허용하는 자체 참조 규칙을 포함하도록 프라이빗
서브넷의 네트워크 ACL 을 업데이트합니다.



Answer: C, D
https://www.examtopics.com/discussions/amazon/view/132738-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사에는 Amazon API Gateway 를 사용하여 REST API 를 호출하는 프런트엔드 ReactJS 웹
사이트가 있습니다. API 는 웹사이트의 기능을 수행합니다. 데이터 엔지니어는 API 게이트웨이를
통해 가끔 호출될 수 있는 Python 스크립트를 작성해야 합니다. 코드는 API Gateway 에 결과를
반환해야 합니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. Amazon Elastic Container Service(Amazon ECS) 클러스터에 사용자 지정 Python 스크립트를
배포합니다.
B. 동시성이 프로비저닝된 AWS Lambda Python 함수를 생성합니다.
C. Amazon Elastic Kubernetes Service(Amazon EKS)에서 API 게이트웨이와 통합할 수 있는
사용자 지정 Python 스크립트를 배포합니다.
D. AWS Lambda 함수를 생성합니다. 모의 이벤트를 사용하여 5 분마다 Lambda 함수를
호출하도록 Amazon EventBridge 규칙을 예약하여 함수가 웜 상태인지 확인하세요.



Answer: B
https://www.examtopics.com/discussions/amazon/view/132630-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사에는 회사 워크로드를 실행하는 프로덕션 AWS 계정이 있습니다. 회사의 보안팀은 프로덕션
AWS 계정의 보안 로그를 저장하고 분석하기 위해 보안 AWS 계정을 만들었습니다. 프로덕션
AWS 계정의 보안 로그는 Amazon CloudWatch Logs 에 저장됩니다.
회사는 Amazon Kinesis Data Streams 를 사용하여 보안 AWS 계정에 보안 로그를 전달해야
합니다.
어떤 솔루션이 이러한 요구 사항을 충족합니까?
A. 프로덕션 AWS 계정에서 대상 데이터 스트림을 생성합니다. 보안 AWS 계정에서 프로덕션
AWS 계정의 Kinesis Data Streams 에 대한 교차 계정 권한이 있는 IAM 역할을 생성합니다.
B. 보안 AWS 계정에 대상 데이터 스트림을 생성합니다. IAM 역할과 신뢰 정책을 생성하여
CloudWatch Logs 에 데이터를 스트림에 넣을 수 있는 권한을 부여합니다. 보안 AWS 계정에
구독 필터를 생성합니다.
C. 프로덕션 AWS 계정에서 대상 데이터 스트림을 생성합니다. 프로덕션 AWS 계정에서 보안
AWS 계정의 Kinesis Data Streams 에 대한 교차 계정 권한이 있는 IAM 역할을 생성합니다.
D. 보안 AWS 계정에 대상 데이터 스트림을 생성합니다. IAM 역할과 신뢰 정책을 생성하여
CloudWatch Logs 에 데이터를 스트림에 넣을 수 있는 권한을 부여합니다. 프로덕션 AWS
계정에서 구독 필터를 생성합니다.



Answer: D
https://www.examtopics.com/discussions/amazon/view/133056-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사는 Amazon S3 를 사용하여 트랜잭션 데이터 레이크에 반구조화된 데이터를 저장합니다.
일부 데이터 파일은 작지만 다른 데이터 파일은 수십 테라바이트입니다.
데이터 엔지니어는 변경 데이터 캡처(CDC) 작업을 수행하여 데이터 원본에서 변경된 데이터를
식별해야 합니다. 데이터 소스는 매일 전체 스냅샷을 JSON 파일로 전송하고 변경된 데이터를
데이터 레이크에 수집합니다.
변경된 데이터를 가장 비용 효율적으로 캡처하는 솔루션은 무엇입니까?
A. 이전 데이터와 현재 데이터 간의 변경 사항을 식별하는 AWS Lambda 함수를 생성합니다.
데이터 레이크에 변경 사항을 수집하도록 Lambda 함수를 구성합니다.
B. MySQL 용 Amazon RDS 로 데이터를 수집합니다. AWS Database Migration Service(AWS
DMS)를 사용하여 변경된 데이터를 데이터 레이크에 씁니다.
C. 오픈 소스 데이터 레이크 형식을 사용하여 데이터 소스를 S3 데이터 레이크와 병합하여 새
데이터를 삽입하고 기존 데이터를 업데이트합니다.
D. Aurora Serverless 를 실행하는 Amazon Aurora MySQL DB 인스턴스로 데이터를 수집합니다.
AWS Database Migration Service(AWS DMS)를 사용하여 변경된 데이터를 데이터 레이크에
씁니다.



Answer: C
https://www.examtopics.com/discussions/amazon/view/131705-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 Amazon S3 버킷에 있는 데이터에 대해 Amazon Athena 쿼리를 실행합니다.
Athena 쿼리는 AWS Glue 데이터 카탈로그를 메타데이터 테이블로 사용합니다.
데이터 엔지니어는 Athena 쿼리 계획에 성능 병목 현상이 발생하고 있음을 발견했습니다.
데이터 엔지니어는 성능 병목 현상의 원인이 S3 버킷에 있는 많은 수의 파티션이라고
판단합니다. 데이터 엔지니어는 성능 병목 현상을 해결하고 Athena 쿼리 계획 시간을 줄여야
합니다.
어떤 솔루션이 이러한 요구 사항을 충족합니까? (2 개 선택)
A. AWS Glue 파티션 인덱스를 생성합니다. 파티션 필터링을 활성화합니다.
B. 사용자 쿼리의 WHERE 절에서 데이터가 공통으로 갖는 열을 기준으로 데이터를 버킷합니다.
C. S3 버킷 접두사를 기반으로 Athena 파티션 프로젝션을 사용합니다.
D. S3 버킷에 있는 데이터를 Apache Parquet 형식으로 변환합니다.
E. Amazon EMR S3DistCP 유틸리티를 사용하여 S3 버킷의 작은 객체를 더 큰 객체로
결합합니다.



Answer: A, C
https://www.examtopics.com/discussions/amazon/view/131708-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 AWS 로의 실시간 스트리밍 데이터 수집을 관리해야 합니다. 데이터
엔지니어는 최대 30 분 동안 시간 기반 집계를 사용하여 수신 스트리밍 데이터에 대해 실시간
분석을 수행하려고 합니다. 데이터 엔지니어에게는 내결함성이 뛰어난 솔루션이 필요합니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. 비즈니스 및 분석 로직이 모두 포함된 AWS Lambda 함수를 사용하여 Amazon Kinesis Data
Streams 의 데이터에 대해 최대 30 분 동안 시간 기반 집계를 수행합니다.
B. Apache Flink 용 Amazon Managed Service(이전의 Amazon Kinesis Data Analytics)를 사용하여
여러 유형의 집계를 사용하여 중복 항목이 포함될 수 있는 데이터를 분석합니다.
C. 비즈니스와 분석 로직을 모두 포함하는 AWS Lambda 함수를 사용하여 이벤트 타임스탬프를
기준으로 최대 30 분의 텀블링 윈도우에 대한 집계를 수행합니다.
D. Amazon Managed Service for Apache Flink(이전의 Amazon Kinesis Data Analytics)를
사용하여 여러 유형의 집계를 사용하여 최대 30 분 동안 시간 기반 분석을 수행함으로써
데이터를 분석합니다.



Answer: D
https://www.examtopics.com/discussions/amazon/view/132739-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사는 Amazon Elastic Block Store(Amazon EBS) 범용 SSD 스토리지를 gp2 에서 gp3 로
업그레이드할 계획입니다. 회사는 업그레이드된 스토리지로 마이그레이션하는 동안 데이터
손실을 일으킬 수 있는 Amazon EC2 인스턴스의 중단을 방지하려고 합니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. gp2 볼륨의 스냅샷을 생성합니다. 스냅샷에서 새 gp3 볼륨을 생성합니다. 새 gp3 볼륨을
EC2 인스턴스에 연결합니다.
B. 새로운 gp3 볼륨을 생성합니다. 점차적으로 데이터를 새로운 gp3 볼륨으로 전송합니다.
전송이 완료되면 새 gp3 볼륨을 EC2 인스턴스에 탑재하여 gp2 볼륨을 교체합니다.
C. 기존 gp2 볼륨의 볼륨 유형을 gp3 으로 변경합니다. 볼륨 크기, IOPS 및 처리량에 대한 새
값을 입력합니다.
D. AWS DataSync 를 사용하여 새 gp3 볼륨을 생성합니다. 원래 gp2 볼륨의 데이터를 새 gp3
볼륨으로 전송합니다.



Answer: C
https://www.examtopics.com/discussions/amazon/view/132762-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사가 Microsoft SQL Server 를 실행하는 Amazon EC2 인스턴스에서 Microsoft SQL Server
DB 인스턴스용 Amazon RDS 로 데이터베이스 서버를 마이그레이션하고 있습니다. 회사의 분석
팀은 마이그레이션이 완료될 때까지 매일 대규모 데이터 요소를 내보내야 합니다. 데이터
요소는 여러 테이블에 걸친 SQL 조인의 결과입니다. 데이터는 Apache Parquet 형식이어야
합니다. 분석 팀은 Amazon S3 에 데이터를 저장해야 합니다.
어떤 솔루션이 운영상 가장 효율적인 방식으로 이러한 요구 사항을 충족합니까?
A. 필요한 데이터 요소가 포함된 EC2 인스턴스 기반 SQL Server 데이터베이스에 뷰(view)를
생성합니다. 뷰(view)에서 직접 데이터를 선택하고 Parquet 형식의 데이터를 S3 버킷으로
전송하는 AWS Glue 작업을 생성합니다. 매일 실행되도록 AWS Glue 작업을 예약합니다.
B. EC2 인스턴스 기반 SQL Server 데이터베이스에서 원하는 데이터 요소를 선택하는 일일 SQL
쿼리를 실행하도록 SQL Server 에이전트를 예약합니다. 출력 .csv 객체를 S3 버킷으로 보내도록
쿼리를 구성합니다. 출력 형식을 .csv 에서 Parquet 로 변환하기 위해 AWS Lambda 함수를
호출하는 S3 이벤트를 생성합니다.
C. SQL 쿼리를 사용하여 필요한 데이터 요소가 포함된 EC2 인스턴스 기반 SQL Server
데이터베이스에 뷰(view)를 생성합니다. 뷰(view)를 읽으려면 AWS Glue 크롤러를 생성하고
실행하세요. 데이터를 검색하고 Parquet 형식의 데이터를 S3 버킷으로 전송하는 AWS Glue
작업을 생성합니다. 매일 실행되도록 AWS Glue 작업을 예약합니다.
D. JDBC(Java Database Connectivity)를 사용하여 EC2 인스턴스 기반 데이터베이스를 쿼리하는
AWS Lambda 함수를 생성합니다. 필요한 데이터를 검색하고, 데이터를 Parquet 형식으로
변환하고, 데이터를 S3 버킷으로 전송하도록 Lambda 함수를 구성합니다. Amazon
EventBridge 를 사용하여 Lambda 함수가 매일 실행되도록 예약합니다.



Answer: C
https://www.examtopics.com/discussions/amazon/view/132742-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어링 팀은 운영 보고를 위해 Amazon Redshift 데이터 웨어하우스를 사용하고
있습니다. 팀에서는 장기 실행 쿼리로 인해 발생할 수 있는 성능 문제를 방지하려고 합니다.
데이터 엔지니어는 쿼리 최적화 프로그램이 성능 문제를 나타낼 수 있는 조건을 식별할 때 이상
현상을 기록하기 위해 Amazon Redshift 에서 시스템 테이블을 선택해야 합니다.
이 요구 사항을 충족하려면 데이터 엔지니어가 어떤 테이블 뷰(view)를 사용해야 합니까?
A. STL_USAGE_Control
B. STL_ALERT_EVENT_LOG
C. STL_QUERY_METRICS
D. STL_PLAN_INFO



Answer: B
https://www.examtopics.com/discussions/amazon/view/132660-Exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 .csv 형식의 구조화된 데이터 소스를 Amazon S3 데이터 레이크로 수집해야
합니다. .csv 파일에는 15 개의 열이 포함되어 있습니다. 데이터 분석가는 데이터 세트의 하나
또는 두 개의 열에 대해 Amazon Athena 쿼리를 실행해야 합니다. 데이터 분석가는 전체 파일을
쿼리하는 경우가 거의 없습니다.
이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?
A. AWS Glue PySpark 작업을 사용하여 소스 데이터를 .csv 형식으로 데이터 레이크에
수집합니다.
B. .csv 구조화된 데이터 소스에서 읽을 AWS Glue ETL(추출, 변환 및 로드) 작업을 생성합니다.
데이터를 JSON 형식으로 데이터 레이크에 수집하도록 작업을 구성합니다.
C. AWS Glue PySpark 작업을 사용하여 소스 데이터를 Apache Avro 형식의 데이터 레이크에
수집합니다.
D. .csv 구조화된 데이터 소스에서 읽을 AWS Glue ETL(추출, 변환 및 로드) 작업을 생성합니다.
Apache Parquet 형식으로 데이터 레이크에 데이터를 쓰도록 작업을 구성합니다.



Answer: D
https://www.examtopics.com/discussions/amazon/view/132349-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사는 서로 다른 AWS 리전에 5 개의 사무실을 가지고 있습니다. 각 사무실에는 고유한 IAM
역할을 사용하는 자체 인사(HR) 부서가 있습니다. 회사는 Amazon S3 스토리지를 기반으로 하는
데이터 레이크에 직원 기록을 저장합니다.
데이터 엔지니어링 팀은 기록에 대한 액세스를 제한해야 합니다. 각 HR 부서는 해당 HR 부서의
지역 내에 있는 직원의 기록에만 액세스할 수 있어야 합니다.
데이터 엔지니어링 팀은 최소한의 운영 오버헤드로 이 요구 사항을 충족하기 위해 어떤 단계
조합을 수행해야 합니까? (2 개 선택)
A. 각 지역의 데이터 필터를 사용하여 S3 경로를 데이터 위치로 등록하십시오.
B. S3 경로를 AWS Lake Formation 위치로 등록합니다.
C. HR 부서의 IAM 역할을 수정하여 각 부서의 지역에 대한 데이터 필터를 추가합니다.
D. AWS Lake Formation 에서 세분화된 액세스 제어를 활성화합니다. 각 지역에 대한 데이터
필터를 추가합니다.
E. 각 지역마다 별도의 S3 버킷을 생성합니다. S3 액세스를 허용하도록 IAM 정책을 구성합니다.
지역에 따라 액세스를 제한합니다.



Answer: B, D
https://www.examtopics.com/discussions/amazon/view/132348-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사는 AWS Step Functions 를 사용하여 데이터 파이프라인을 조정합니다. 파이프라인은
데이터 소스에서 데이터를 수집하고 Amazon S3 버킷에 데이터를 저장하는 Amazon EMR
작업으로 구성됩니다. 파이프라인에는 Amazon Redshift 에 데이터를 로드하는 EMR 작업도
포함되어 있습니다.
회사의 클라우드 인프라 팀은 Step Functions 상태 시스템을 수동으로 구축했습니다. 클라우드
인프라 팀은 EMR 작업을 지원하기 위해 EMR 클러스터를 VPC 로 시작했습니다. 그러나 배포된
Step Functions 상태 시스템은 EMR 작업을 실행할 수 없습니다.
Step Functions 상태 시스템이 EMR 작업을 실행할 수 없는 이유를 확인하기 위해 회사는 어떤
단계 조합을 수행해야 합니까? (2 개 선택)
A. AWS CloudFormation 을 사용하여 Step Functions 상태 시스템 배포를 자동화하십시오.
실패한 EMR 작업 중에 상태 시스템을 일시 중지하는 단계를 생성합니다. 인간 사용자가 이메일
메시지를 통해 승인을 보낼 때까지 기다리는 단계를 구성합니다. 추가 분석을 위해 이메일
메시지에 EMR 작업의 세부 정보를 포함합니다.
B. Step Functions 상태 머신 코드에 EMR 작업을 생성하고 실행하는 데 필요한 모든 IAM
권한이 있는지 확인합니다. Step Functions 상태 머신 코드에 EMR 작업이 사용하는 Amazon S3
버킷에 액세스할 수 있는 IAM 권한도 포함되어 있는지 확인하십시오. S3 용 액세스 분석기를
사용하여 S3 액세스 속성을 확인하세요.
C. 새로 생성된 EMR 클러스터에 대한 Amazon CloudWatch 항목을 확인합니다. EKS 에서
Amazon EMR 을 사용하도록 AWS Step Functions 상태 기계 코드를 변경합니다. Amazon Elastic
Kubernetes Service(Amazon EKS)의 포함을 반영하도록 Step Functions 상태 머신 코드에 대한
IAM 액세스 정책 및 보안 그룹 구성을 변경합니다.
D. VPC 의 흐름 로그를 쿼리합니다. EMR 클러스터에서 발생하는 트래픽이 데이터 공급자에
성공적으로 도달할 수 있는지 확인합니다. Amazon EMR 클러스터에 연결될 수 있는 보안 그룹이
정보가 있는 포트에서 데이터 소스 서버에 대한 연결을 허용하는지 여부를 결정합니다.
E. EMR 작업에 대해 회사에서 구성한 재시도 시나리오를 확인합니다. 각 EMR 작업 사이의
간격(초)을 늘립니다. 각 대체 상태에 각 결정 상태에 대한 적절한 catch 가 있는지 확인합니다.
오류 메시지를 저장하도록 Amazon Simple 알림 서비스(Amazon SNS) 주제를 구성합니다.



Answer: B, D
https://www.examtopics.com/discussions/amazon/view/132353-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사가 Amazon EC2 인스턴스에서 실행되는 애플리케이션을 개발하고 있습니다. 현재
애플리케이션이 생성하는 데이터는 일시적입니다. 그러나 회사는 EC2 인스턴스가 종료되더라도
데이터를 유지해야 합니다.
데이터 엔지니어는 Amazon 머신 이미지(AMI)에서 새 EC2 인스턴스를 시작하고 데이터를
보존하도록 인스턴스를 구성해야 합니다.
이 요구 사항을 충족하는 솔루션은 무엇입니까?
A. 애플리케이션 데이터가 포함된 EC2 인스턴스 스토어 볼륨이 지원하는 AMI 를 사용하여 새
EC2 인스턴스를 시작합니다. EC2 인스턴스에 기본 설정을 적용합니다.
B. 애플리케이션 데이터가 포함된 루트 Amazon Elastic Block Store(Amazon EBS) 볼륨이
지원하는 AMI 를 사용하여 새 EC2 인스턴스를 시작합니다. EC2 인스턴스에 기본 설정을
적용합니다.
C. EC2 인스턴스 스토어 볼륨이 지원하는 AMI 를 사용하여 새 EC2 인스턴스를 시작합니다.
애플리케이션 데이터를 포함하려면 Amazon Elastic Block Store(Amazon EBS) 볼륨을
연결하세요. EC2 인스턴스에 기본 설정을 적용합니다.
D. Amazon Elastic Block Store(Amazon EBS) 볼륨이 지원하는 AMI 를 사용하여 새로운 EC2
인스턴스를 시작합니다. 애플리케이션 데이터를 포함할 추가 EC2 인스턴스 스토어 볼륨을
연결합니다. EC2 인스턴스에 기본 설정을 적용합니다.



Answer: C
https://www.examtopics.com/discussions/amazon/view/132354-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사는 Amazon Athena 를 사용하여 CTAS(Create Table As Select)를 사용하여 추출, 변환 및
로드(ETL) 작업에 대한 SQL 쿼리를 실행합니다. 회사는 분석을 생성하기 위해 SQL 대신
Apache Spark 를 사용해야 합니다.
회사가 Spark 를 사용하여 Athena 에 액세스할 수 있는 기능을 제공하는 솔루션은 무엇입니까?
A. Athena 쿼리 설정
B. Athena 작업 그룹
C. Athena 데이터 소스
D. Athena 쿼리 편집기



Answer: B
https://www.examtopics.com/discussions/amazon/view/132667-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사는 데이터 레이크에 사용하는 Amazon S3 스토리지를 분할해야 합니다. 파티셔닝에서는
s3://bucket/prefix/year=2023/month=01/day=01 형식의 S3 객체 키 경로를 사용합니다.
데이터 엔지니어는 회사가 버킷에 새 파티션을 추가할 때 AWS Glue 데이터 카탈로그가 S3
스토리지와 동기화되는지 확인해야 합니다.
가장 짧은 대기 시간으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. 매일 아침 실행되도록 AWS Glue 크롤러를 예약합니다.
B. AWS Glue CreatePartition API 를 매일 두 번 수동으로 실행합니다.
C. Amazon S3 에 데이터를 쓰는 코드를 사용하여 Boto3 AWS Glue create_partition API 호출을
호출합니다.
D. AWS Glue 콘솔에서 MSCK REPAIR TABLE 명령을 실행합니다.



Answer: C
https://www.examtopics.com/discussions/amazon/view/132364-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
미디어 회사는 SaaS(Software as a Service) 애플리케이션을 사용하여 타사 도구를 통해
데이터를 수집합니다. 회사는 Amazon S3 버킷에 데이터를 저장해야 합니다. 회사는 Amazon
Redshift 를 사용하여 데이터를 기반으로 분석을 수행할 것입니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 AWS 서비스 또는 기능은 무엇입니까?
A. Amazon Managed Streaming for Apache Kafka (Amazon MSK)
B. Amazon AppFlow
C. AWS Glue Data Catalog
D. Amazon Kinesis



Answer: B
https://www.examtopics.com/discussions/amazon/view/132669-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 Amazon Athena 를 사용하여 Amazon S3 에 있는 판매 데이터를 분석하고
있습니다. 데이터 엔지니어는 sales_data 라는 테이블에서 여러 제품에 대한 2023 년 판매량을
검색하는 쿼리를 작성합니다. 그러나 쿼리는 sales_data 테이블에 있는 모든 제품에 대한
결과를 반환하지 않습니다. 문제를 해결하려면 데이터 엔지니어가 쿼리 문제를 해결해야 합니다.
데이터 엔지니어의 원래 쿼리는 다음과 같습니다.
SELECT product_name, sum(sales_amount)
FROM sales_data
WHERE year = 2023
GROUP BY product_name
데이터 엔지니어는 이러한 요구 사항을 충족하기 위해 Athena 쿼리를 어떻게 수정해야 합니까?
A. 집계를 위해 sum(sales_amount)를 count(*)로 바꿉니다.
B. WHERE year = 2023 을 WHERE extract(year FROM sales_data) = 2023 으로 변경합니다.
C. GROUP BY 절 뒤에 HAVING sum(sales_amount) > 0 을 추가합니다.
D. GROUP BY 절을 제거합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/132672-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 Amazon S3 버킷에 있는 Apache Parquet 형식의 객체에서 데이터를 읽는
일회성 작업을 수행합니다. 데이터 엔지니어는 데이터의 한 열만 쿼리하면 됩니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. S3 버킷의 데이터를 Pandas 데이터 프레임으로 로드하도록 AWS Lambda 함수를 구성합니다.
데이터프레임에 SQL SELECT 문을 작성하여 필요한 열을 쿼리합니다.
B. S3 Select 를 사용하여 S3 객체에서 필요한 열을 검색하는 SQL SELECT 문을 작성합니다.
C. S3 객체를 사용하고 필요한 열을 쿼리하도록 AWS Glue DataBrew 프로젝트를 준비합니다.
D. S3 객체에서 AWS Glue 크롤러를 실행합니다. Amazon Athena 에서 SQL SELECT 문을
사용하여 필요한 열을 쿼리합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/132673-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사는 데이터 웨어하우스로 Amazon Redshift 를 사용합니다. 회사는 Amazon Redshift
구체화된 뷰(view)에 대한 새로 고침 일정을 자동화해야 합니다.
최소한의 노력으로 이 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?
A. Apache Airflow 를 사용하여 구체화된 뷰(view)를 새로 고칩니다.
B. Amazon Redshift 내에서 AWS Lambda 사용자 정의 함수(UDF)를 사용하여 구체화된
뷰(view)를 새로 고칩니다.
C. Amazon Redshift 의 쿼리 편집기 v2 를 사용하여 구체화된 뷰(view)를 새로 고칩니다.
D. AWS Glue 워크플로를 사용하여 구체화된 뷰(view)를 새로 고칩니다.



Answer: C
https://www.examtopics.com/discussions/amazon/view/132674-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 하나의 AWS Lambda 함수와 하나의 AWS Glue 작업으로 구성된 데이터
파이프라인을 조정해야 합니다. 솔루션은 AWS 서비스와 통합되어야 합니다.
최소한의 관리 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. 상태 시스템이 포함된 AWS Step Functions 워크플로를 사용하십시오. Lambda 함수를 실행한
다음 AWS Glue 작업을 실행하도록 상태 시스템을 구성합니다.
B. Amazon EC2 인스턴스에 배포된 Apache Airflow 워크플로를 사용합니다. 첫 번째 작업이
Lambda 함수를 호출하고 두 번째 작업이 AWS Glue 작업을 호출하는 방향성 비순환
그래프(DAG)를 정의합니다.
C. AWS Glue 워크플로를 사용하여 Lambda 함수를 실행한 다음 AWS Glue 작업을 실행합니다.
D. Amazon Elastic Kubernetes Service(Amazon EKS)에 배포된 Apache Airflow 워크플로를
사용합니다. 첫 번째 작업이 Lambda 함수를 호출하고 두 번째 작업이 AWS Glue 작업을
호출하는 방향성 비순환 그래프(DAG)를 정의합니다.



Answer: A
https://www.examtopics.com/discussions/amazon/view/132676-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사는 AWS 클라우드에서 실행되는 데이터 소스에 대한 데이터 카탈로그 및 메타데이터 관리를
설정해야 합니다. 회사는 데이터 카탈로그를 사용하여 데이터 저장소 집합에 있는 모든 개체의
메타데이터를 유지 관리합니다. 데이터 저장소에는 Amazon RDS 및 Amazon Redshift 와 같은
구조화된 소스가 포함됩니다. 데이터 저장소에는 Amazon S3 에 저장되는 JSON 파일 및 .xml
파일과 같은 반구조화된 소스도 포함됩니다.
회사에는 정기적으로 데이터 카탈로그를 업데이트하는 솔루션이 필요합니다. 솔루션은 소스
메타데이터에 대한 변경 사항도 감지해야 합니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. Amazon Aurora 를 데이터 카탈로그로 사용하십시오. 데이터 카탈로그에 연결할 AWS Lambda
함수를 생성합니다. 여러 소스에서 메타데이터 정보를 수집하고 Aurora 데이터 카탈로그를
업데이트하도록 Lambda 함수를 구성합니다. 주기적으로 실행되도록 Lambda 함수를
예약합니다.
B. AWS Glue 데이터 카탈로그를 중앙 메타데이터 저장소로 사용합니다. AWS Glue 크롤러를
사용하여 여러 데이터 스토어에 연결하고 메타데이터 변경 사항으로 데이터 카탈로그를
업데이트합니다. 메타데이터 카탈로그를 업데이트하기 위해 주기적으로 실행되도록 크롤러를
예약합니다.
C. Amazon DynamoDB 를 데이터 카탈로그로 사용하십시오. 데이터 카탈로그에 연결할 AWS
Lambda 함수를 생성합니다. 여러 소스에서 메타데이터 정보를 수집하고 DynamoDB 데이터
카탈로그를 업데이트하도록 Lambda 함수를 구성합니다. 주기적으로 실행되도록 Lambda
함수를 예약합니다.
D. AWS Glue 데이터 카탈로그를 중앙 메타데이터 저장소로 사용합니다. Amazon RDS 및
Amazon Redshift 소스에 대한 스키마를 추출하고 데이터 카탈로그를 구축합니다. Amazon S3 에
있는 데이터에 대해 AWS Glue 크롤러를 사용하여 스키마를 추론하고 데이터 카탈로그를
자동으로 업데이트합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/132677-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사는 프로비저닝된 용량 모드에서 작동하는 Amazon DynamoDB 테이블에 애플리케이션의
데이터를 저장합니다. 애플리케이션의 워크로드에는 정기적으로 예측 가능한 처리량 로드가
있습니다. 매주 월요일에는 이른 아침에 활동이 즉시 증가합니다. 주말에는 애플리케이션
사용량이 매우 적습니다.
회사는 사용량이 가장 많은 시간에도 애플리케이션이 일관되게 작동하는지 확인해야 합니다.
가장 비용 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. 프로비저닝된 용량을 현재 피크 로드 시간 동안 존재하는 최대 용량으로 늘립니다.
B. 표를 두 개의 표로 나눈다. 원본 테이블 프로비저닝 용량의 절반으로 각 테이블을
프로비저닝합니다. 쿼리를 두 테이블에 균등하게 분산시킵니다.
C. AWS Application Auto Scaling 을 사용하여 피크 사용 시간에 더 높은 프로비저닝 용량을
예약합니다. 사용량이 적은 시간에는 용량을 낮추도록 예약하세요.
D. 용량 모드를 프로비저닝에서 주문형으로 변경합니다. 테이블의 로드에 따라 확장 및
축소되도록 테이블을 구성합니다.



Answer: C
https://www.examtopics.com/discussions/amazon/view/132678-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사가 온프레미스 Apache Hadoop 클러스터를 Amazon EMR 로 마이그레이션할 계획입니다.
또한 회사는 데이터 카탈로그를 영구 스토리지 솔루션으로 마이그레이션해야 합니다.
회사는 현재 Hadoop 클러스터의 온프레미스 Apache Hive 메타스토어에 데이터 카탈로그를
저장하고 있습니다. 회사에서는 데이터 카탈로그를 마이그레이션하기 위해 서버리스 솔루션이
필요합니다.
이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?
A. AWS Database Migration Service(AWS DMS)를 사용하여 Hive 메타스토어를 Amazon S3 로
마이그레이션합니다. Amazon S3 를 스캔하여 데이터 카탈로그를 생성하도록 AWS Glue 데이터
카탈로그를 구성합니다.
B. Amazon EMR 에서 Hive 메타스토어를 구성합니다. 기존 온프레미스 Hive 메타스토어를
Amazon EMR 로 마이그레이션합니다. AWS Glue 데이터 카탈로그를 사용하여 회사의 데이터
카탈로그를 외부 데이터 카탈로그로 저장합니다.
C. Amazon EMR 에서 외부 Hive 메타스토어를 구성합니다. 기존 온프레미스 Hive 메타스토어를
Amazon EMR 로 마이그레이션합니다. Amazon Aurora MySQL 을 사용하여 회사의 데이터
카탈로그를 저장하십시오.
D. Amazon EMR 에서 새로운 Hive 메타스토어를 구성합니다. 기존 온프레미스 Hive
메타스토어를 Amazon EMR 로 마이그레이션합니다. 새 메타스토어를 회사의 데이터 카탈로그로
사용합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/132680-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사는 Amazon Redshift 프로비저닝된 클러스터를 데이터베이스로 사용합니다. Redshift
클러스터에는 5 개의 예약된 ra3.4xlarge 노드가 있으며 키 배포를 사용합니다.
데이터 엔지니어는 노드 중 하나의 CPU 로드가 90%를 초과하는 경우가 많다는 사실을
발견했습니다. 노드에서 실행되는 SQL 쿼리는 대기열에 추가됩니다. 다른 4 개 노드의 CPU
로드는 일반적으로 일일 작업 중 15% 미만입니다.
데이터 엔지니어는 현재 컴퓨팅 노드 수를 유지하려고 합니다. 또한 데이터 엔지니어는 5 개의
컴퓨팅 노드 전체에 걸쳐 로드 균형을 더욱 균등하게 조정하려고 합니다.
어떤 솔루션이 이러한 요구 사항을 충족합니까?
A. SQL SELECT 문의 WHERE 절에서 가장 자주 사용되는 데이터 열이 되도록 정렬 키를
변경합니다.
B. 분산 키를 가장 큰 차원을 가진 테이블 열로 변경합니다.
C. 예약 노드를 ra3.4xlarge 에서 ra3.16xlarge 로 업그레이드합니다.
D. 기본 키를 SQL SELECT 문의 WHERE 절에서 가장 자주 사용되는 데이터 열로 변경한다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/132681-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
보안 회사는 JSON 형식의 IoT 데이터를 Amazon S3 버킷에 저장합니다. 회사가 IoT 장치를
업그레이드하면 데이터 구조가 변경될 수 있습니다. 회사는 IoT 데이터가 포함된 데이터
카탈로그를 생성하려고 합니다. 회사의 분석 부서는 데이터 카탈로그를 사용하여 데이터를
색인화합니다.
이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?
A. AWS Glue 데이터 카탈로그를 생성합니다. AWS Glue 스키마 레지스트리를 구성합니다. 분석
부서가 Amazon Redshift Serverless 에 사용할 데이터 수집을 조정하기 위해 새로운 AWS Glue
워크로드를 생성합니다.
B. Amazon Redshift 프로비저닝 클러스터를 생성합니다. 분석 부서가 Amazon S3 에 있는
데이터를 탐색할 수 있도록 Amazon Redshift Spectrum 데이터베이스를 생성합니다. Amazon
Redshift 에 데이터를 로드하는 Redshift 저장 프로시저를 생성합니다.
C. Amazon Athena 작업 그룹을 생성합니다. Athena 를 통해 Apache Spark 를 사용하여 Amazon
S3 에 있는 데이터를 탐색합니다. Athena 작업 그룹 스키마와 테이블을 분석 부서에 제공합니다.
D. AWS Glue 데이터 카탈로그를 생성합니다. AWS Glue 스키마 레지스트리를 구성합니다.
Amazon Redshift Data API 를 사용하여 AWS Lambda 사용자 정의 함수(UDF)를 생성합니다.
분석 부서가 Amazon Redshift Serverless 에 사용할 데이터 수집을 조율하기 위해 AWS Step
Functions 작업을 생성합니다.



Answer: A
https://www.examtopics.com/discussions/amazon/view/132683-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사는 Amazon S3 버킷에 거래 세부 정보를 저장합니다. 회사는 S3 버킷에 대한 모든 쓰기를
동일한 AWS 리전에 있는 다른 S3 버킷에 기록하려고 합니다.
최소한의 운영 노력으로 이 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?
A. AWS Lambda 함수를 호출하도록 트랜잭션 S3 버킷의 모든 활동에 대해 S3 이벤트 알림
규칙을 구성합니다. Amazon Kinesis Data Firehose 에 이벤트를 쓰도록 Lambda 함수를
프로그래밍합니다. 로그 S3 버킷에 이벤트를 쓰도록 Kinesis Data Firehose 를 구성합니다.
B. AWS CloudTraiL 에서 관리 이벤트 추적을 생성합니다. 트랜잭션 S3 버킷에서 데이터를
수신하도록 추적을 구성합니다. 빈 접두사 및 쓰기 전용 이벤트를 지정합니다. 로그 S3 버킷을
대상 버킷으로 지정합니다.
C. AWS Lambda 함수를 호출하도록 트랜잭션 S3 버킷의 모든 활동에 대한 S3 이벤트 알림
규칙을 구성합니다. 이벤트를 로그 S3 버킷에 기록하도록 Lambda 함수를 프로그래밍합니다.
D. AWS CloudTraiL 에서 데이터 이벤트 추적을 생성합니다. 트랜잭션 S3 버킷에서 데이터를
수신하도록 추적을 구성합니다. 빈 접두사 및 쓰기 전용 이벤트를 지정합니다. 로그 S3 버킷을
대상 버킷으로 지정합니다.



Answer: D
https://www.examtopics.com/discussions/amazon/view/132684-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 사용자가 Amazon EMR 및 Amazon Athena 쿼리를 통해 액세스하는 중앙
메타데이터 저장소를 유지 관리해야 합니다. 리포지토리는 많은 테이블의 스키마와 속성을
제공해야 합니다. 일부 메타데이터는 Apache Hive 에 저장됩니다. 데이터 엔지니어는 Hive 의
메타데이터를 중앙 메타데이터 저장소로 가져와야 합니다.
최소한의 개발 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. Amazon EMR 과 Apache Ranger 를 사용하십시오.
B. EMR 클러스터에서 Hive 메타스토어를 사용합니다.
C. AWS Glue 데이터 카탈로그를 사용하십시오.
D. Amazon RDS for MySQL DB 인스턴스에서 메타스토어를 사용합니다.



Answer: C
https://www.examtopics.com/discussions/amazon/view/132685-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사는 AWS 에 데이터 레이크를 구축해야 합니다. 회사는 특정 팀에 행 수준 데이터 액세스와
열 수준 데이터 액세스를 제공해야 합니다. 팀은 Amazon EMR 의 Amazon Athena, Amazon
Redshift Spectrum 및 Apache Hive 를 사용하여 데이터에 액세스합니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. 데이터 레이크 스토리지에는 Amazon S3 를 사용하십시오. S3 액세스 정책을 사용하여 행과
열별로 데이터 액세스를 제한합니다. Amazon S3 를 통해 데이터 액세스를 제공합니다.
B. 데이터 레이크 스토리지로 Amazon S3 를 사용하십시오. Amazon EMR 을 통해 Apache
Ranger 를 사용하여 행과 열별로 데이터 액세스를 제한합니다. Apache Pig 를 사용하여 데이터
액세스를 제공합니다.
C. 데이터 레이크 스토리지로 Amazon Redshift 를 사용하십시오. Redshift 보안 정책을 사용하여
행과 열별로 데이터 액세스를 제한합니다. Apache Spark 및 Amazon Athena 통합 쿼리를
사용하여 데이터 액세스를 제공합니다.
D. 데이터 레이크 스토리지에는 Amazon S3 를 사용하십시오. AWS Lake Formation 을 사용하여
행과 열별로 데이터 액세스를 제한합니다. AWS Lake Formation 을 통해 데이터 액세스를
제공합니다.



Answer: D
https://www.examtopics.com/discussions/amazon/view/132686-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 항공사가 분석을 위해 비행 활동에 대한 지표를 수집하고 있습니다. 회사는 정시 출발을
늘리는 데 사용할 수 있는 통찰력을 분석이 어떻게 제공할 수 있는지 보여주기 위해 개념
증명(POC) 테스트를 수행하고 있습니다.
POC 테스트에서는 .csv 형식의 지표가 포함된 Amazon S3 의 객체를 사용합니다. POC 테스트는
Amazon Athena 를 사용하여 데이터를 쿼리합니다. 데이터는 S3 버킷에서 날짜별로 분할됩니다.
데이터 양이 증가함에 따라 회사는 쿼리 성능을 향상시키기 위해 스토리지 솔루션을
최적화하려고 합니다.
이러한 요구 사항을 충족하는 솔루션 조합은 무엇입니까? (2 개 선택)
A. 파티션 전체에서 더 많은 처리량을 얻으려면 Amazon S3 의 키 시작 부분에 무작위 문자열을
추가하십시오.
B. Athena 를 사용하여 데이터를 쿼리하는 동일한 계정에 있는 S3 버킷을 사용합니다.
C. 회사가 Athena 쿼리를 실행하는 동일한 AWS 리전에 있는 S3 버킷을 사용합니다.
D. 쿼리에 필요한 문서 키만 가져와 .csv 데이터를 JSON 형식으로 전처리합니다.
E. 조건자에 필요한 데이터 블록만 가져와서 .csv 데이터를 Apache Parquet 형식으로
전처리합니다.



Answer: C, E
https://www.examtopics.com/discussions/amazon/view/132687-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사는 MySQL 용 Amazon RDS 를 중요한 애플리케이션의 데이터베이스로 사용합니다.
데이터베이스 워크로드는 대부분 쓰기이며 읽기 횟수는 적습니다.
데이터 엔지니어는 DB 인스턴스의 CPU 사용률이 매우 높다는 사실을 발견했습니다. CPU
사용률이 높으면 애플리케이션 속도가 느려집니다. 데이터 엔지니어는 DB 인스턴스의 CPU
사용률을 줄여야 합니다.
이 요구 사항을 충족하려면 데이터 엔지니어가 어떤 조치를 취해야 합니까? (2 개 선택)
A. Amazon RDS의 성능 개선 도우미 기능을 사용하여 CPU 사용률이 높은 쿼리를 식별하십시오.
문제가 있는 쿼리를 최적화합니다.
B. 추가 테이블과 인덱스를 포함하도록 데이터베이스 스키마를 수정합니다.
C. 매주 한 번씩 RDS DB 인스턴스를 재부팅합니다.
D. 더 큰 인스턴스 크기로 업그레이드하세요.
E. 데이터베이스 쿼리 부하를 줄이기 위해 캐싱을 구현합니다.



Answer: A, D
https://www.examtopics.com/discussions/amazon/view/135451-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사에서 Orders 라는 Amazon Redshift 테이블을 6 개월 동안 사용했습니다. 회사는 테이블에
대해 매주 업데이트 및 삭제를 수행합니다. 테이블에는 AWS 리전이 포함된 열에 인터리브 정렬
키가 있습니다.
회사는 저장 공간이 부족해지지 않도록 디스크 공간을 회수하려고 합니다. 회사에서는 정렬 키
열도 분석하려고 합니다.
이러한 요구 사항을 충족하는 Amazon Redshift 명령은 무엇입니까?
A. VACUUM FULL Orders
B. VACUUM DELETE ONLY Orders
C. VACUUM REINDEX Orders
D. VACUUM SORT ONLY Orders



Answer: C
https://www.examtopics.com/discussions/amazon/view/135091-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 제조 회사가 센서로부터 데이터를 수집하려고 합니다. 데이터 엔지니어는 거의 실시간으로
센서 데이터를 수집하는 솔루션을 구현해야 합니다.
솔루션은 데이터를 영구 데이터 저장소에 저장해야 합니다. 솔루션은 데이터를 중첩된 JSON
형식으로 저장해야 합니다. 회사는 10 밀리초 미만의 대기 시간으로 데이터 저장소에서 쿼리할
수 있어야 합니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. 자체 호스팅 Apache Kafka 클러스터를 사용하여 센서 데이터를 캡처합니다. 쿼리를 위해
Amazon S3 에 데이터를 저장합니다.
B. AWS Lambda 를 사용하여 센서 데이터를 처리합니다. 쿼리를 위해 Amazon S3 에 데이터를
저장합니다.
C. Amazon Kinesis Data Streams 를 사용하여 센서 데이터를 캡처합니다. 쿼리를 위해 Amazon
DynamoDB 에 데이터를 저장합니다.
D. Amazon Simple Queue Service(Amazon SQS)를 사용하여 수신되는 센서 데이터를
버퍼링합니다. 쿼리를 위해 AWS Glue 를 사용하여 Amazon RDS 에 데이터를 저장합니다.



Answer: C
https://www.examtopics.com/discussions/amazon/view/132688-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사는 Amazon S3 에 있는 데이터 레이크에 데이터를 저장합니다. 회사가 데이터 레이크에
저장하는 일부 데이터에는 개인 식별 정보(PII)가 포함되어 있습니다. 여러 사용자 그룹이 원시
데이터에 액세스해야 합니다. 회사는 사용자 그룹이 필요한 PII 에만 액세스할 수 있도록 해야
합니다.
최소한의 노력으로 이러한 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?
A. Amazon Athena 를 사용하여 데이터를 쿼리합니다. AWS Lake Formation 을 설정하고 데이터
필터를 생성하여 회사의 IAM 역할에 대한 액세스 수준을 설정합니다. 사용자의 PII 액세스 요구
사항과 일치하는 IAM 역할에 각 사용자를 할당합니다.
B. Amazon QuickSight 를 사용하여 데이터에 액세스합니다. QuickSight 의 열 수준 보안 기능을
사용하면 사용자가 Amazon Athena 를 통해 Amazon S3 에서 검색할 수 있는 PII 를 제한할 수
있습니다. 사용자의 PII 액세스 요구 사항을 기반으로 QuickSight 액세스 수준을 정의합니다.
C. 데이터에 액세스하기 위해 백그라운드에서 Athena 쿼리를 실행할 사용자 지정 쿼리 빌더
UI 를 구축합니다. Amazon Cognito 에서 사용자 그룹을 생성합니다. 사용자의 PII 액세스 요구
사항에 따라 사용자 그룹에 액세스 수준을 할당합니다.
D. 다양한 수준의 세분화된 액세스 권한을 가진 IAM 역할을 생성합니다. IAM 사용자 그룹에
IAM 역할을 할당합니다. ID 기반 정책을 사용하여 열 수준에서 사용자 그룹에 액세스 수준을
할당합니다.



Answer: A
https://www.examtopics.com/discussions/amazon/view/132689-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 10 개의 소스 시스템에서 Amazon Redshift 데이터베이스에 있는 10 개의
테이블로 데이터를 처리하고 로드하기 위해 ETL(추출, 변환 및 로드) 파이프라인을 구축해야
합니다. 모든 소스 시스템은 15 분마다 .csv, JSON 또는 Apache Parquet 파일을 생성합니다.
소스 시스템은 모두 파일을 하나의 Amazon S3 버킷으로 전달합니다. 파일 크기는 10MB 에서
20GB 까지입니다. ETL 파이프라인은 데이터 스키마 변경에도 불구하고 올바르게 작동해야
합니다.
이러한 요구 사항을 충족하는 데이터 파이프라인 솔루션은 무엇인가요? (2 개 선택)
A. Amazon EventBridge 규칙을 사용하여 15 분마다 AWS Glue 작업을 실행하십시오. 데이터를
처리하고 Amazon Redshift 테이블에 로드하도록 AWS Glue 작업을 구성합니다.
B. Amazon EventBridge 규칙을 사용하여 15 분마다 AWS Glue 워크플로 작업을 호출합니다.
AWS Glue 크롤러를 실행한 다음 크롤러 실행이 성공적으로 완료되면 AWS Glue 작업을
실행하는 온디맨드 트리거를 갖도록 AWS Glue 워크플로를 구성합니다. 데이터를 처리하고
Amazon Redshift 테이블에 로드하도록 AWS Glue 작업을 구성합니다.
C. 파일이 S3 버킷에 로드될 때 AWS Glue 크롤러를 호출하도록 AWS Lambda 함수를
구성합니다. 데이터를 처리하고 Amazon Redshift 테이블에 로드하도록 AWS Glue 작업을
구성합니다. AWS Glue 작업을 실행하기 위한 두 번째 Lambda 함수를 생성합니다. AWS Glue
크롤러 실행이 성공적으로 완료되면 두 번째 Lambda 함수를 호출하는 Amazon EventBridge
규칙을 생성합니다.
D. 파일이 S3 버킷에 로드될 때 AWS Glue 워크플로를 호출하도록 AWS Lambda 함수를
구성합니다. AWS Glue 크롤러를 실행한 다음 크롤러 실행이 성공적으로 완료되면 AWS Glue
작업을 실행하는 온디맨드 트리거를 갖도록 AWS Glue 워크플로를 구성합니다. 데이터를
처리하고 Amazon Redshift 테이블에 로드하도록 AWS Glue 작업을 구성합니다.
E. 파일이 S3 버킷에 로드될 때 AWS Glue 작업을 호출하도록 AWS Lambda 함수를 구성합니다.
S3 버킷의 파일을 Apache Spark DataFrame 으로 읽도록 AWS Glue 작업을 구성합니다.
DataFrame 의 더 작은 파티션을 Amazon Kinesis Data Firehose 전송 스트림에 배치하도록 AWS
Glue 작업을 구성합니다. Amazon Redshift 테이블에 데이터를 로드하도록 전송 스트림을
구성합니다.



Answer: B D
https://www.examtopics.com/discussions/amazon/view/132744-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 금융 회사는 비즈니스 인텔리전스(BI) 애플리케이션을 지원하기 위해 Amazon Athena 를
사용하여 페타바이트 규모의 데이터 세트에서 온디맨드 SQL 쿼리를 실행하려고 합니다. 업무
시간 외 시간에 실행되는 AWS Glue 작업은 매일 한 번씩 데이터 세트를 업데이트합니다. BI
애플리케이션에는 회사 정책을 준수하기 위해 1 시간의 표준 데이터 새로 고침 빈도가 있습니다.
데이터 엔지니어는 추가 인프라 비용을 추가하지 않고 회사의 Amazon Athena 사용 비용을
최적화하려고 합니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. 1 일 후에 데이터를 S3 Glacier Deep Archive 스토리지 클래스로 이동하도록 Amazon S3 수명
주기 정책을 구성합니다.
B. SQL 쿼리에는 Amazon Athena 의 쿼리 결과 재사용 기능을 사용하십시오.
C. BI 애플리케이션과 Athena 사이에 Amazon ElastiCache 클러스터를 추가합니다.
D. 데이터 세트에 있는 파일 형식을 Apache Parquet 로 변경합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/132694-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사의 데이터 엔지니어는 테이블 SQL 쿼리의 성능을 최적화해야 합니다. 회사는 Amazon
Redshift 클러스터에 데이터를 저장합니다. 데이터 엔지니어는 예산 제약으로 인해 클러스터
크기를 늘릴 수 없습니다.
회사는 데이터를 여러 테이블에 저장하고 EVEN 배포 스타일을 사용하여 데이터를 로드합니다.
일부 테이블의 크기는 수백 기가바이트입니다. 다른 테이블의 크기는 10MB 미만입니다.
어떤 솔루션이 이러한 요구 사항을 충족합니까?
A. 모든 테이블에 대해 EVEN 배포 스타일을 계속 사용하십시오. 모든 테이블에 기본 키와 외래
키를 지정합니다.
B. 큰 테이블에는 ALL 배포 스타일을 사용합니다. 모든 테이블에 기본 키와 외래 키를
지정합니다.
C. 자주 업데이트되지 않는 작은 테이블에는 ALL 배포 스타일을 사용합니다. 모든 테이블에
기본 키와 외래 키를 지정합니다.
D. 모든 테이블에 대한 분포, 정렬, 파티션 키의 조합을 지정합니다.



Answer: C
https://www.examtopics.com/discussions/amazon/view/132695-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사는 실제 주소 데이터가 포함된 .csv 파일을 받습니다. 데이터는 이름이 Door_No,
Street_Name, City 및 Zip_Code 인 열에 있습니다. 회사는 이러한 값을 다음 형식으로 저장하기
위해 단일 열을 생성하려고 합니다.
최소한의 코딩 노력으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?
A. AWS Glue DataBrew 를 사용하여 파일을 읽습니다. NEST_TO_ARRAY 변환을 사용하여 새
열을 생성합니다.
B. AWS Glue DataBrew 를 사용하여 파일을 읽습니다. NEST_TO_MAP 변환을 사용하여 새 열을
생성합니다.
C. AWS Glue DataBrew 를 사용하여 파일을 읽습니다. PIVOT 변환을 사용하여 새 열을 만듭니다.
D. Python 에서 Lambda 함수를 작성하여 파일을 읽습니다. Python 데이터 사전 유형을 사용하여
새 열을 만듭니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/135424-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사는 민감한 고객 정보가 포함된 Amazon S3 객체로 통화 로그를 수신합니다. 회사는
암호화를 사용하여 S3 객체를 보호해야 합니다. 또한 회사는 특정 직원만 접근할 수 있는
암호화 키를 사용해야 합니다.
최소한의 노력으로 이러한 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?
A. AWS CloudHSM 클러스터를 사용하여 암호화 키를 저장하십시오. 객체를 암호화하고
해독하기 위해 CloudHSM 을 호출하도록 Amazon S3 에 쓰는 프로세스를 구성합니다. CloudHSM
클러스터에 대한 액세스를 제한하는 IAM 정책을 배포합니다.
B. 고객 제공 키(SSE-C)를 사용한 서버 측 암호화를 사용하여 고객 정보가 포함된 객체를
암호화합니다. 객체를 암호화하는 키에 대한 액세스를 제한합니다.
C. AWS KMS 키(SSE-KMS)로 서버 측 암호화를 사용하여 고객 정보가 포함된 객체를
암호화합니다. 객체를 암호화하는 KMS 키에 대한 액세스를 제한하는 IAM 정책을 구성합니다.
D. Amazon S3 관리형 키(SSE-S3)와 함께 서버 측 암호화를 사용하여 고객 정보가 포함된
객체를 암호화합니다. 객체를 암호화하는 Amazon S3 관리형 키에 대한 액세스를 제한하는 IAM
정책을 구성합니다.



Answer: C
https://www.examtopics.com/discussions/amazon/view/132696-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사는 S3 Standard 스토리지 클래스의 수천 개의 Amazon S3 버킷에 페타바이트 규모의
데이터를 저장합니다. 데이터는 예측할 수 없고 가변적인 데이터 액세스 패턴을 갖는 분석
워크로드를 지원합니다.
회사는 몇 달 동안 일부 데이터에 액세스하지 않습니다. 그러나 회사는 밀리초 이내에 모든
데이터를 검색할 수 있어야 합니다. 회사는 S3 스토리지 비용을 최적화해야 합니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. S3 Storage Lens 표준 지표를 사용하여 객체를 보다 비용 최적화된 스토리지 클래스로 이동할
시기를 결정합니다. S3 버킷에 대한 S3 수명 주기 정책을 생성하여 객체를 비용 최적화된
스토리지 클래스로 이동합니다. 앞으로도 S3 수명 주기 정책을 계속해서 개선하여 스토리지
비용을 최적화하세요.
B. S3 Storage Lens 활동 지표를 사용하여 회사가 자주 액세스하지 않는 S3 버킷을 식별합니다.
데이터 기간에 따라 S3 Standard 에서 S3 Standard-Infrequent Access(S3 Standard-IA) 및 S3
Glacier 스토리지 클래스로 객체를 이동하도록 S3 수명 주기 규칙을 구성합니다.
C. S3 지능형 계층화를 사용합니다. Deep Archive Access 계층을 활성화합니다.
D. S3 지능형 계층화를 사용합니다. 기본 액세스 계층을 사용합니다.



Answer: D
https://www.examtopics.com/discussions/amazon/view/132697-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
보안 검토 중에 한 회사에서 AWS Glue 작업의 취약점을 식별했습니다. 회사는 Amazon Redshift
클러스터에 액세스하기 위한 자격 증명이 작업 스크립트에 하드 코딩되어 있음을 발견했습니다.
데이터 엔지니어는 AWS Glue 작업의 보안 취약성을 해결해야 합니다. 솔루션은 자격 증명을
안전하게 저장해야 합니다.
이러한 요구 사항을 충족하기 위해 데이터 엔지니어는 어떤 단계 조합을 수행해야 합니까? (2 개
선택)
A. AWS Glue 작업 매개변수에 자격 증명을 저장합니다.
B. Amazon S3 버킷에 있는 구성 파일에 자격 증명을 저장합니다.
C. AWS Glue 작업을 사용하여 Amazon S3 버킷에 있는 구성 파일에서 자격 증명에
액세스합니다.
D. AWS Secrets Manager 에 자격 증명을 저장합니다.
E. AWS Glue 작업 IAM 역할에 저장된 자격 증명에 대한 액세스 권한을 부여합니다.



Answer: D, E
https://www.examtopics.com/discussions/amazon/view/132698-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 Amazon Redshift 를 사용하여 매달 한 번씩 리소스 집약적인 분석
프로세스를 실행합니다. 매달 데이터 엔지니어는 새로운 Redshift 프로비저닝 클러스터를
생성합니다. 데이터 엔지니어는 매달 분석 프로세스가 완료된 후 Redshift 프로비저닝된
클러스터를 삭제합니다. 데이터 엔지니어는 매달 클러스터를 삭제하기 전에 클러스터에서
Amazon S3 버킷으로 백업 데이터를 언로드합니다.
데이터 엔지니어는 데이터 엔지니어가 인프라를 수동으로 관리할 필요가 없는 월별 분석
프로세스를 실행하기 위한 솔루션이 필요합니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. 분석 프로세스가 완료되면 Amazon Step Functions 를 사용하여 Redshift 클러스터를 일시
중지하고 클러스터를 재개하여 매달 새 프로세스를 실행합니다.
B. Amazon Redshift Serverless 를 사용하여 분석 워크로드를 자동으로 처리합니다.
C. AWS CLI 를 사용하여 분석 워크로드를 자동으로 처리합니다.
D. AWS CloudFormation 템플릿을 사용하여 분석 워크로드를 자동으로 처리합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/132699-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사는 .xls 형식의 고객 데이터가 포함된 일일 파일을 받습니다. 회사는 파일을 Amazon S3 에
저장합니다. 일일 파일 크기는 약 2GB 입니다.
데이터 엔지니어는 고객 이름이 포함된 파일의 열과 고객 성이 포함된 열을 연결합니다. 데이터
엔지니어는 파일에서 개별 고객 수를 확인해야 합니다.
최소한의 운영 노력으로 이 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?
A. AWS Glue 노트북에서 Apache Spark 작업을 생성하고 실행합니다. S3 파일을 읽고 개별 고객
수를 계산하도록 작업을 구성합니다.
B. AWS Glue 크롤러를 생성하여 S3 파일의 AWS Glue 데이터 카탈로그를 생성합니다. Amazon
Athena 에서 SQL 쿼리를 실행하여 개별 고객 수를 계산합니다.
C. Amazon EMR Serverless 에서 Apache Spark 작업을 생성하고 실행하여 개별 고객 수를
계산합니다.
D. AWS Glue DataBrew 를 사용하여 COUNT_DISTINCT 집계 함수를 사용하여 개별 고객 수를
계산하는 레시피를 생성합니다.



Answer: D
https://www.examtopics.com/discussions/amazon/view/132700-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 의료 회사는 Amazon Kinesis Data Streams 를 사용하여 웨어러블 디바이스, 병원 장비 및
환자 기록에서 실시간 건강 데이터를 스트리밍합니다.
데이터 엔지니어는 스트리밍 데이터를 처리하기 위한 솔루션을 찾아야 합니다. 데이터
엔지니어는 Amazon Redshift Serverless Warehouse 에 데이터를 저장해야 합니다. 솔루션은
스트리밍 데이터와 전날 데이터에 대한 거의 실시간 분석을 지원해야 합니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. Amazon Kinesis Data Firehose 에 데이터를 로드합니다. Amazon Redshift 에 데이터를
로드합니다.
B. Amazon Redshift 의 스트리밍 수집 기능을 사용하십시오.
C. Amazon S3 에 데이터를 로드합니다. COPY 명령을 사용하여 Amazon Redshift 에 데이터를
로드합니다.
D. Amazon Redshift 와 Amazon Aurora zero-ETL 통합을 사용하십시오.



Answer: B
https://www.examtopics.com/discussions/amazon/view/132765-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 Amazon S3 버킷에 저장된 데이터에 대한 Amazon Athena 쿼리를 기반으로
하는 Amazon QuickSight 대시보드를 사용해야 합니다. 데이터 엔지니어가 QuickSight
대시보드에 연결하면 데이터 엔지니어는 권한이 부족함을 나타내는 오류 메시지를 받습니다.
권한 관련 오류가 발생할 수 있는 요인은 무엇입니까? (2 개 선택)
A. QuickSight 와 Athena 사이에는 연결이 없습니다.
B. Athena 테이블은 카탈로그에 포함되어 있지 않습니다.
C. QuickSight 는 S3 버킷에 액세스할 수 없습니다.
D. QuickSight 는 S3 데이터를 해독할 수 있는 액세스 권한이 없습니다.
E. QuickSight 에 할당된 IAM 역할이 없습니다.



Answer: C, D
https://www.examtopics.com/discussions/amazon/view/132701-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사는 Amazon S3 버킷에 JSON 형식과 .csv 형식으로 데이터 세트를 저장합니다. 이 회사는
Microsoft SQL Server 데이터베이스용 Amazon RDS, 프로비저닝된 용량 모드의 Amazon
DynamoDB 테이블, Amazon Redshift 클러스터를 보유하고 있습니다. 데이터 엔지니어링 팀은
데이터 과학자가 SQL 과 유사한 구문을 사용하여 모든 데이터 소스를 쿼리할 수 있는 기능을
제공하는 솔루션을 개발해야 합니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. AWS Glue 를 사용하여 데이터 소스를 크롤링합니다. AWS Glue 데이터 카탈로그에
메타데이터를 저장합니다. Amazon Athena 를 사용하여 데이터를 쿼리합니다. 구조화된 데이터
소스에는 SQL 을 사용합니다. JSON 형식으로 저장된 데이터에는 PartiQL 을 사용합니다.
B. AWS Glue 를 사용하여 데이터 소스를 크롤링합니다. AWS Glue 데이터 카탈로그에
메타데이터를 저장합니다. Redshift Spectrum 을 사용하여 데이터를 쿼리합니다. 구조화된 데이터
소스에는 SQL 을 사용합니다. JSON 형식으로 저장된 데이터에는 PartiQL 을 사용합니다.
C. AWS Glue 를 사용하여 데이터 소스를 크롤링합니다. AWS Glue 데이터 카탈로그에
메타데이터를 저장합니다. AWS Glue 작업을 사용하여 JSON 형식의 데이터를 Apache Parquet
또는 .csv 형식으로 변환합니다. 변환된 데이터를 S3 버킷에 저장합니다. Amazon Athena 를
사용하여 S3 버킷에서 원본 데이터와 변환된 데이터를 쿼리합니다.
D. AWS Lake Formation 을 사용하여 데이터 레이크를 생성하십시오. Lake Formation 작업을
사용하여 모든 데이터 소스의 데이터를 Apache Parquet 형식으로 변환합니다. 변환된 데이터를
S3 버킷에 저장합니다. Amazon Athena 또는 Redshift Spectrum 을 사용하여 데이터를
쿼리합니다.



Answer: A
https://www.examtopics.com/discussions/amazon/view/132702-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 AWS Glue 대화형 세션을 사용하여 기계 학습(ML) 모델용 데이터를
준비하도록 Amazon SageMaker Studio 를 구성하고 있습니다.
데이터 엔지니어가 SageMaker Studio 를 사용하여 데이터를 준비하려고 하면 액세스 거부
오류가 발생합니다.
SageMaker Studio 에 액세스하려면 엔지니어가 어떤 변경을 해야 합니까?
A. 데이터 엔지니어의 IAM 사용자에게 AWSGlueServiceRole 관리형 정책을 추가합니다.
B. 신뢰 정책의 AWS Glue 및 SageMaker 서비스 주체에 대한 sts:AssumeRole 작업을 포함하는
데이터 엔지니어의 IAM 사용자에게 정책을 추가합니다.
C. 데이터 엔지니어의 IAM 사용자에게 AmazonSageMakerFullAccess 관리형 정책을 추가합니다.
D. 신뢰 정책에서 AWS Glue 및 SageMaker 서비스 주체에 대한 sts:AddAssociation 작업을
허용하는 정책을 데이터 엔지니어의 IAM 사용자에게 추가합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/132703-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사는 SAP HANA, Microsoft SQL Server, MongoDB, Apache Kafka 및 Amazon DynamoDB 와
같은 데이터 소스에서 매일 약 1TB 의 데이터를 추출합니다. 일부 데이터 소스에는 정의되지
않은 데이터 스키마 또는 변경되는 데이터 스키마가 있습니다.
데이터 엔지니어는 이러한 데이터 소스에 대한 스키마를 감지할 수 있는 솔루션을 구현해야
합니다. 솔루션은 데이터를 추출, 변환하고 Amazon S3 버킷에 로드해야 합니다. 회사는 데이터
생성 후 15 분 이내에 S3 버킷에 데이터를 로드하는 서비스 수준 계약(SLA)을 보유하고
있습니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. Amazon EMR 을 사용하여 스키마를 감지하고 데이터를 추출, 변환하고 S3 버킷에 로드합니다.
Apache Spark 에서 파이프라인을 생성합니다.
B. AWS Glue 를 사용하여 스키마를 감지하고 데이터를 추출, 변환 및 S3 버킷에 로드합니다.
Apache Spark 에서 파이프라인을 생성합니다.
C. AWS Lambda 에서 PySpark 프로그램을 생성하여 데이터를 추출, 변환하고 S3 버킷에
로드합니다.
D. Amazon Redshift 에서 저장 프로시저를 생성하여 스키마를 감지하고 데이터를 Redshift
Spectrum 테이블로 추출, 변환 및 로드합니다. Amazon S3 에서 테이블에 액세스합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/132706-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사에는 Amazon S3 버킷에 저장된 데이터 세트를 사용하는 여러 애플리케이션이 있습니다.
회사에는 개인 식별 정보(PII)가 포함된 데이터 세트를 생성하는 전자 상거래 애플리케이션이
있습니다. 회사에는 PII 에 액세스할 필요가 없는 내부 분석 애플리케이션이 있습니다.
규정을 준수하기 위해 회사는 PII 를 불필요하게 공유해서는 안 됩니다. 데이터 엔지니어는
데이터 세트에 액세스하는 각 애플리케이션의 요구 사항에 따라 PII 를 동적으로 수정하는
솔루션을 구현해야 합니다.
최소한의 운영 오버헤드로 요구 사항을 충족하는 솔루션은 무엇입니까?
A. S3 버킷 정책을 생성하여 각 애플리케이션의 액세스를 제한하십시오. 데이터세트의 복사본을
여러 개 만듭니다. 각 데이터 세트 복사본에 복사본에 액세스하는 애플리케이션의 요구 사항에
맞는 적절한 수준의 수정을 제공합니다.
B. S3 객체 Lambda 엔드포인트를 생성합니다. S3 객체 Lambda 엔드포인트를 사용하여 S3
버킷에서 데이터를 읽습니다. S3 객체 Lambda 함수 내에서 수정 논리를 구현하여 데이터에
액세스하는 각 애플리케이션의 요구 사항에 따라 PII 를 동적으로 수정합니다.
C. AWS Glue 를 사용하여 각 애플리케이션의 데이터를 변환합니다. 데이터세트의 복사본을 여러
개 만듭니다. 각 데이터 세트 복사본에 복사본에 액세스하는 애플리케이션의 요구 사항에 맞는
적절한 수준의 수정을 제공합니다.
D. 사용자 지정 권한 부여자가 있는 API 게이트웨이 엔드포인트를 생성합니다. API 게이트웨이
엔드포인트를 사용하여 S3 버킷에서 데이터를 읽습니다. 데이터에 액세스하는 각
애플리케이션의 요구 사항에 따라 PII 를 동적으로 수정하는 REST API 호출을 시작합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/132707-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 ETL(추출, 변환 및 로드) 작업을 구축해야 합니다. ETL 작업은 사용자가
Amazon S3 버킷에 업로드하는 매일 수신되는 .csv 파일을 처리합니다. 각 S3 객체의 크기는
100MB 미만입니다.
이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?
A. 사용자 정의 Python 애플리케이션을 작성합니다. Amazon Elastic Kubernetes Service(Amazon
EKS) 클러스터에서 애플리케이션을 호스팅합니다.
B. PySpark ETL 스크립트를 작성합니다. Amazon EMR 클러스터에서 스크립트를 호스팅합니다.
C. AWS Glue PySpark 작업을 작성합니다. Apache Spark 를 사용하여 데이터를 변환합니다.
D. AWS Glue Python 셸 작업을 작성합니다. 팬더를 사용하여 데이터를 변환합니다.



Answer: D
https://www.examtopics.com/discussions/amazon/view/132708-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/
C??


Q
데이터 엔지니어는 Orders 라는 AWS Glue 크롤러를 사용하여 AWS Glue 데이터 카탈로그
테이블을 생성합니다. 데이터 엔지니어는 다음과 같은 새 파티션을 추가하려고 합니다.
s3://transactions/orders/order_date=2023-01-01
s3://transactions/orders/order_date=2023-01-02
데이터 엔지니어는 테이블 위치에 있는 모든 폴더와 파일을 검색하지 않고 테이블에 새
파티션을 포함하도록 메타데이터를 편집해야 합니다.
데이터 엔지니어는 Amazon Athena 에서 어떤 데이터 정의 언어(DDL) 문을 사용해야 합니까?
A. ALTER TABLE Orders ADD PARTITION(order_date=’2023-01-01’) LOCATION
‘s3://transactions/orders/order_date=2023-01-01’;
ALTER TABLE Orders ADD PARTITION(order_date=’2023-01-02’) LOCATION
‘s3://transactions/orders/order_date=2023-01-02’;
B. MSCK REPAIR TABLE Orders;
C. REPAIR TABLE Orders;
D. ALTER TABLE Orders MODIFY PARTITION(order_date=’2023-01-01’) LOCATION
‘s3://transactions/orders/2023-01-01’;
ALTER TABLE Orders MODIFY PARTITION(order_date=’2023-01-02’) LOCATION
‘s3://transactions/orders/2023-01-02’;



Answer: A
https://www.examtopics.com/discussions/amazon/view/142527-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사는 Amazon S3 에 10~15TB 의 압축되지 않은 .csv 파일을 저장합니다. 회사는 Amazon
Athena 를 일회성 쿼리 엔진으로 평가하고 있습니다.
회사는 쿼리 런타임 및 스토리지 비용을 최적화하기 위해 데이터를 변환하려고 합니다.
Athena 쿼리에 대한 이러한 요구 사항을 충족하는 파일 형식 및 압축 솔루션은 무엇입니까?
A. zip 으로 압축된 .csv 형식
B. bzip2 로 압축된 JSON 형식
C. Snappy 로 압축된 Apache Parquet 형식
D. LZO 로 압축된 Apache Avro 형식



Answer: C
https://www.examtopics.com/discussions/amazon/view/142529-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사는 Apache Airflow 를 사용하여 회사의 현재 온프레미스 데이터 파이프라인을 조정합니다.
회사는 파이프라인의 일부로 SQL 데이터 품질 검사 작업을 실행합니다. 회사는 파이프라인을
AWS 로 마이그레이션하고 AWS 관리형 서비스를 사용하려고 합니다.
최소한의 리팩토링으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. 회사가 Airflow 를 사용하는 위치와 가장 가까운 AWS 리전에 AWS Outposts 를 설치합니다.
서버를 Outposts 호스팅 Amazon EC2 인스턴스로 마이그레이션합니다. 온프레미스 파이프라인
대신 Outposts 호스팅 EC2 인스턴스와 상호 작용하도록 파이프라인을 업데이트합니다.
B. Airflow 애플리케이션과 회사가 마이그레이션해야 하는 코드가 포함된 사용자 지정 Amazon
Machine Image(AMI)를 생성합니다. 사용자 지정 AMI 를 사용하여 Amazon EC2 인스턴스를
배포합니다. 새로 배포된 EC2 인스턴스와 상호 작용하도록 네트워크 연결을 업데이트합니다.
C. 기존 Airflow 오케스트레이션 구성을 Amazon Managed Workflows for Apache
Airflow(Amazon MWAA)로 마이그레이션합니다. Airflow 에서 SQL 작업을 사용하여 데이터 품질을
검증하기 위해 수집 중에 데이터 품질 검사를 만듭니다.
D. 파이프라인을 AWS Step Functions 워크플로로 변환합니다. SQL 의 데이터 품질 검사를
Python 기반 AWS Lambda 함수로 다시 생성합니다.



Answer: C
https://www.examtopics.com/discussions/amazon/view/142558-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사는 Amazon EMR 을 ETL(추출, 변환 및 로드) 파이프라인으로 사용하여 여러 소스에서
오는 데이터를 변환합니다. 데이터 엔지니어는 성능을 극대화하기 위해 파이프라인을 조정해야
합니다.
이 요구 사항을 가장 비용 효율적으로 충족하는 AWS 서비스는 무엇입니까?
A. Amazon EventBridge
B. Amazon Managed Workflows for Apache Airflow (Amazon MWAA)
C. AWS Step Functions
D. AWS Glue Workflows



Answer: C
https://www.examtopics.com/discussions/amazon/view/142535-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
온라인 소매 회사는 ALB(Application Load Balancer) 액세스 로그를 Amazon S3 버킷에
저장합니다. 회사는 Amazon Athena 를 사용하여 로그를 쿼리하여 트래픽 패턴을 분석하려고
합니다.
데이터 엔지니어가 Athena 에서 분할되지 않은 테이블을 생성합니다. 데이터의 양이 점차
증가함에 따라 쿼리에 대한 응답 시간도 늘어납니다. 데이터 엔지니어는 Athena 의 쿼리 성능을
개선하려고 합니다.
최소한의 운영 노력으로 이러한 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?
A. 모든 ALB 액세스 로그의 스키마를 결정하고 AWS Glue 데이터 카탈로그에 파티션
메타데이터를 쓰는 AWS Glue 작업을 생성합니다.
B. 모든 ALB 액세스 로그의 스키마를 결정하고 AWS Glue 데이터 카탈로그에 파티션
메타데이터를 쓰는 분류자를 포함하는 AWS Glue 크롤러를 생성합니다.
C. 모든 ALB 액세스 로그를 변환하는 AWS Lambda 함수를 생성합니다. 결과를 Apache Parquet
형식으로 Amazon S3 에 저장합니다. 메타데이터를 분할합니다. Athena 를 사용하여 변환된
데이터를 쿼리합니다.
D. Apache Hive 를 사용하여 버킷 테이블을 생성합니다. AWS Lambda 함수를 사용하여 모든
ALB 액세스 로그를 변환합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/142559-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사가 AWS 에 비즈니스 인텔리전스 플랫폼을 보유하고 있습니다. 회사는 AWS Storage
Gateway Amazon S3 파일 게이트웨이를 사용하여 회사 온프레미스 환경에서 Amazon S3
버킷으로 파일을 전송합니다.
데이터 엔지니어는 각 파일 전송이 성공적으로 완료되면 일련의 AWS Glue 작업을 실행하기
위해 AWS Glue 워크플로를 자동으로 시작하는 프로세스를 설정해야 합니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. 이전에 성공한 파일 전송을 기반으로 파일 전송이 일반적으로 완료되는 시기를 결정합니다.
해당 시간에 AWS Glue 작업을 시작하도록 Amazon EventBridge 예약 이벤트를 설정합니다.
B. S3 파일 게이트웨이 파일 전송 이벤트가 성공할 때마다 AWS Glue 워크플로를 시작하는
Amazon EventBridge 이벤트를 설정합니다.
C. 각 파일 전송이 완료되면 데이터 엔지니어가 AWS Glue 워크플로를 시작할 수 있도록 주문형
AWS Glue 워크플로를 설정합니다.
D. AWS Glue 워크플로를 호출할 AWS Lambda 함수를 설정합니다. S3 객체 생성을 위한
이벤트를 Lambda 함수의 트리거로 설정합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/142560-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 소매 회사는 Amazon Aurora PostgreSQL 을 사용하여 실시간 트랜잭션 데이터를 처리하고
저장합니다. 이 회사는 데이터 웨어하우스로 Amazon Redshift 클러스터를 사용합니다.
ETL(추출, 변환 및 로드) 작업은 매일 아침 실행되어 PostgreSQL 데이터베이스의 새 데이터로
Redshift 클러스터를 업데이트합니다. 회사는 빠르게 성장했으며 Redshift 클러스터의 비용을
최적화해야 합니다.
데이터 엔지니어는 기록 데이터를 보관하기 위한 솔루션을 만들어야 합니다. 데이터 엔지니어는
PostgreSQL 의 실시간 트랜잭션 데이터, Redshift 의 현재 데이터 및 보관된 기록 데이터의
데이터를 효과적으로 결합하는 분석 쿼리를 실행할 수 있어야 합니다. 솔루션은 비용 절감을
위해 Amazon Redshift 에 가장 최근 15 개월의 데이터만 보관해야 합니다.
이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2 개 선택)
A. PostgreSQL 데이터베이스에 있는 실시간 트랜잭션 데이터를 쿼리하도록 Amazon Redshift
Federated Query 기능을 구성합니다.
B. PostgreSQL 데이터베이스에 있는 실시간 트랜잭션 데이터를 쿼리하도록 Amazon Redshift
Spectrum 을 구성합니다.
C. UNLOAD 명령을 사용하여 15 개월이 지난 데이터를 Amazon S3 에 복사하도록 월간 작업을
예약합니다. Redshift 클러스터에서 이전 데이터를 삭제합니다. Amazon S3 의 기록 데이터에
액세스하도록 Amazon Redshift Spectrum 을 구성합니다.
D. UNLOAD 명령을 사용하여 15 개월이 지난 데이터를 Amazon S3 Glacier 유연한 검색으로
복사하도록 월간 작업을 예약합니다. Redshift 클러스터에서 이전 데이터를 삭제합니다. S3
Glacier 유연한 검색의 기록 데이터에 액세스하도록 Redshift Spectrum 을 구성합니다.
E. Amazon Redshift 에서 다양한 소스의 실시간, 현재 및 기록 데이터를 결합하는 구체화된 뷰를
생성합니다.



Answer: A, C
https://www.examtopics.com/discussions/amazon/view/142537-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 제조 회사는 전 세계 시설에 많은 IoT 장치를 보유하고 있습니다. 회사는 Amazon Kinesis
Data Streams 를 사용하여 디바이스에서 데이터를 수집합니다. 데이터에는 장치 ID, 캡처 날짜,
측정 유형, 측정 값 및 시설 ID 가 포함됩니다. 회사에서는 시설 ID 를 파티션 키로 사용합니다.
회사의 운영 팀은 최근 많은 WriteThroughputExceeded 예외를 관찰했습니다. 운영팀은 일부
샤드가 많이 사용되었지만 다른 샤드가 일반적으로 유휴 상태임을 확인했습니다.
운영팀에서 관찰한 문제를 회사는 어떻게 해결해야 할까요?
A. 파티션 키를 시설 ID 에서 무작위로 생성된 키로 변경합니다.
B. 샤드 수를 늘립니다.
C. 생산자 측에서 데이터를 보관합니다.
D. 파티션 키를 시설 ID 에서 캡처 날짜로 변경합니다.



Answer: A
https://www.examtopics.com/discussions/amazon/view/142562-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 판매 데이터 테이블에 대해 실행되는 Amazon Athena 의 SQL 쿼리 성능을
개선하려고 합니다.
데이터 엔지니어는 특정 SQL 문의 실행 계획을 이해하려고 합니다. 데이터 엔지니어는 SQL
쿼리에서 각 작업의 계산 비용도 확인하려고 합니다.
이러한 요구 사항을 충족하려면 데이터 엔지니어가 실행해야 하는 문은 무엇인가요?
A. EXPLAIN SELECT * FROM sales;
B. EXPLAIN ANALYZE FROM sales;
C. EXPLAIN ANALYZE SELECT * FROM sales;
D. EXPLAIN FROM sales;



Answer: C
https://www.examtopics.com/discussions/amazon/view/142563-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사는 VPC 내에서 로그 전송 스트림을 프로비저닝할 계획입니다. 회사는 Amazon CloudWatch
Logs 에 게시하도록 VPC 흐름 로그를 구성했습니다. 회사는 추가 분석을 위해 거의 실시간으로
흐름 로그를 Splunk 에 보내야 합니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. Splunk 를 대상으로 사용하도록 Amazon Kinesis Data Streams 데이터 스트림을 구성합니다.
CloudWatch Logs 구독 필터를 생성하여 로그 이벤트를 데이터 스트림으로 보냅니다.
B. Splunk 를 대상으로 사용하려면 Amazon Kinesis Data Firehose 전송 스트림을 생성합니다.
CloudWatch Logs 구독 필터를 생성하여 로그 이벤트를 전송 스트림으로 보냅니다.
C. Splunk 를 대상으로 사용하려면 Amazon Kinesis Data Firehose 전송 스트림을 생성합니다.
CloudWatch Logs 의 흐름 로그를 전송 스트림으로 보내는 AWS Lambda 함수를 생성합니다.
D. Splunk 를 대상으로 사용하도록 Amazon Kinesis Data Streams 데이터 스트림을 구성합니다.
CloudWatch Logs 의 흐름 로그를 데이터 스트림으로 보내는 AWS Lambda 함수를 생성합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/142564-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사가 AWS 에 데이터 레이크를 보유하고 있습니다. 데이터 레이크는 사업부로부터 데이터
소스를 수집합니다. 이 회사는 쿼리에 Amazon Athena 를 사용합니다. 스토리지 계층은 AWS
Glue 데이터 카탈로그를 메타데이터 리포지토리로 사용하는 Amazon S3 입니다.
회사는 데이터 과학자와 비즈니스 분석가가 데이터를 사용할 수 있도록 하려고 합니다. 그러나
회사는 먼저 사용자 역할과 책임에 따라 Athena 에 대한 세분화된 열 수준 데이터 액세스를
관리해야 합니다.
어떤 솔루션이 이러한 요구 사항을 충족합니까?
A. AWS Lake Formation 을 설정합니다. Lake Formation 에서 IAM 역할별로 사용자 및
애플리케이션에 대한 보안 정책 기반 규칙을 정의합니다.
B. AWS Glue 테이블에 대한 IAM 리소스 기반 정책을 정의합니다. IAM 사용자 그룹에 동일한
정책을 연결합니다.
C. AWS Glue 테이블에 대한 IAM 자격 증명 기반 정책을 정의합니다. IAM 역할에 동일한 정책을
연결합니다. IAM 역할을 사용자가 포함된 IAM 그룹과 연결합니다.
D. AWS Resource Access Manager(AWS RAM)에서 리소스 공유를 생성하여 IAM 사용자에게
액세스 권한을 부여합니다.



Answer: A
https://www.examtopics.com/discussions/amazon/view/142565-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사는 Amazon S3 의 데이터를 검증하고 변환하기 위해 여러 AWS Glue ETL(추출, 변환 및
로드) 작업을 개발했습니다. ETL 작업은 매일 한 번씩 Amazon RDS for MySQL 에 데이터를 일괄
로드합니다. ETL 작업은 DynamicFrame 을 사용하여 S3 데이터를 읽습니다.
ETL 작업은 현재 S3 버킷에 있는 모든 데이터를 처리합니다. 그러나 회사에서는 작업이 일일
증분 데이터만 처리하기를 원합니다.
최소한의 코딩 노력으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?
A. S3 파일 상태를 읽고 Amazon DynamoDB 에 상태를 기록하는 ETL 작업을 생성합니다.
B. ETL 작업에 대한 작업 북마크를 활성화하여 이전에 처리된 데이터를 추적하기 위해 실행 후
상태를 업데이트합니다.
C. Amazon CloudWatch 에서 처리된 객체를 추적하는 데 도움이 되도록 ETL 작업에 대한 작업
지표를 활성화합니다.
D. 각 실행 후 Amazon S3 에서 처리된 객체를 삭제하도록 ETL 작업을 구성합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/142566-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
온라인 소매 회사에는 VPC 에 있는 Amazon EC2 인스턴스에서 실행되는 애플리케이션이
있습니다. 회사는 VPC 에 대한 흐름 로그를 수집하고 네트워크 트래픽을 분석하려고 합니다.
이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?
A. Amazon CloudWatch Logs 에 흐름 로그를 게시합니다. 분석에는 Amazon Athena 를
사용하십시오.
B. Amazon CloudWatch Logs 에 흐름 로그를 게시합니다. 분석을 위해 Amazon OpenSearch
Service 클러스터를 사용합니다.
C. 흐름 로그를 Amazon S3 에 텍스트 형식으로 게시합니다. 분석에는 Amazon Athena 를
사용하십시오.
D. 흐름 로그를 Apache Parquet 형식으로 Amazon S3 에 게시합니다. 분석에는 Amazon
Athena 를 사용하십시오.



Answer: D
https://www.examtopics.com/discussions/amazon/view/142567-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
소매 회사는 4 개의 예약된 ra3.4xlarge Amazon Redshift 클러스터 노드에 거래, 매장 위치 및
고객 정보 테이블을 저장합니다. 세 테이블 모두 균일한 테이블 분포를 사용합니다.
회사는 매장 위치 테이블을 몇 년에 한두 번만 업데이트합니다.
데이터 엔지니어는 대부분의 쿼리에 대해 전체 매장 위치 테이블이 4 개의 컴퓨팅 노드 모두에
지속적으로 브로드캐스트되기 때문에 Redshift 대기열이 느려지는 것을 발견했습니다. 데이터
엔지니어는 매장 위치 테이블의 브로드캐스팅을 최소화하여 쿼리 성능을 높이려고 합니다.
가장 비용 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. 매장 위치 테이블의 분포 방식을 EVEN 분포에서 ALL 분포로 변경합니다.
B. 매장 위치 테이블의 분포 방식을 가장 높은 차원을 갖는 컬럼을 기준으로 하는 KEY 분포로
변경한다.
C. 모든 테이블의 정렬 키에 store_id 라는 조인 열을 추가합니다.
D. Redshift 예약 노드를 동일한 인스턴스 패밀리에서 더 큰 인스턴스 크기로 업그레이드합니다.



Answer: A
https://www.examtopics.com/discussions/amazon/view/142568-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사에는 Sales 라는 테이블이 포함된 데이터 웨어하우스가 있습니다. 회사는 Amazon
Redshift 에 테이블을 저장합니다. 테이블에는 city_name 이라는 열이 포함되어 있습니다. 회사는
"San" 또는 "El"로 시작하는 city_name 이 있는 모든 행을 찾기 위해 테이블을 쿼리하려고
합니다.
이 요구 사항을 충족하는 SQL 쿼리는 무엇입니까?
A. Select * from Sales where city_name ~ ‘$(San|El)*’;
B. Select * from Sales where city_name ~ ‘^(San|El)*’;
C. Select * from Sales where city_name ~’$(San&El)*’;
D. Select * from Sales where city_name ~ ‘^(San&El)*’;



Answer: B
https://www.examtopics.com/discussions/amazon/view/142569-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사는 거의 실시간 통찰력을 생성하기 위해 온프레미스 PostgreSQL 데이터베이스에서 AWS 로
고객 통화 데이터를 보내야 합니다. 솔루션은 PostgreSQL 데이터베이스에서 실행되는 운영
데이터 저장소에서 업데이트를 캡처하고 로드해야 합니다. 데이터는 지속적으로 변경됩니다.
데이터 엔지니어는 AWS Database Migration Service(AWS DMS) 지속적인 복제 작업을
구성합니다. 이 작업은 각 테이블에 대한 PostgreSQL 소스 데이터베이스 트랜잭션 로그에서
거의 실시간으로 변경 사항을 읽습니다. 그런 다음 작업은 처리를 위해 데이터를 Amazon
Redshift 클러스터로 보냅니다.
데이터 엔지니어는 작업의 변경 데이터 캡처(CDC) 중에 대기 시간 문제를 발견합니다. 데이터
엔지니어는 PostgreSQL 소스 데이터베이스로 인해 대기 시간이 길어진다고 생각합니다.
PostgreSQL 데이터베이스가 긴 지연 시간의 원인임을 확인하는 솔루션은 무엇입니까?
A. Amazon CloudWatch 를 사용하여 DMS 작업을 모니터링하십시오. CDCIncomingChanges
지표를 검사하여 원본 데이터베이스에서 CDC 의 지연을 식별합니다.
B. postgresql.conf 구성 파일에 소스 데이터베이스의 논리적 복제가 구성되어 있는지
확인하십시오.
C. 소스 데이터베이스의 DMS 엔드포인트에 대해 Amazon CloudWatch Logs 를 활성화합니다.
오류 메시지를 확인하세요.
D. Amazon CloudWatch 를 사용하여 DMS 작업을 모니터링합니다. CDCLatencySource 지표를
검사하여 원본 데이터베이스에서 CDC 의 지연을 식별합니다.



Answer: D
https://www.examtopics.com/discussions/amazon/view/142571-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
실험실에서는 IoT 센서를 사용하여 프로젝트의 습도, 온도 및 압력을 모니터링합니다. 센서는
10 초마다 100KB 의 데이터를 전송합니다. 다운스트림 프로세스는 30 초마다 Amazon S3
버킷에서 데이터를 읽습니다.
가장 짧은 지연 시간으로 S3 버킷에 데이터를 전달하는 솔루션은 무엇입니까?
A. Amazon Kinesis Data Streams 및 Amazon Kinesis Data Firehose 를 사용하여 데이터를 S3
버킷으로 전달합니다. Kinesis Data Firehose 의 기본 버퍼 간격을 사용합니다.
B. Amazon Kinesis Data Streams 를 사용하여 데이터를 S3 버킷으로 전달합니다. 5 개의
프로비저닝된 샤드를 사용하도록 스트림을 구성합니다.
C. Amazon Kinesis Data Streams 를 사용하고 Kinesis Client Library 를 호출하여 데이터를 S3
버킷으로 전달합니다. 애플리케이션에서 5 초의 버퍼 간격을 사용합니다.
D. Apache Flink 용 Amazon Managed Service(이전의 Amazon Kinesis Data Analytics) 및
Amazon Kinesis Data Firehose 를 사용하여 데이터를 S3 버킷에 전달합니다. Kinesis Data
Firehose 에는 5 초의 버퍼 간격을 사용합니다.



Answer: D
https://www.examtopics.com/discussions/amazon/view/142561-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/
C??


Q
한 회사는 기계 학습(ML)을 사용하여 Amazon S3 데이터 레이크에 있는 데이터에 대한 분석을
수행하려고 합니다. 회사에는 회사 내의 소비자에게 보고서를 생성할 수 있는 기능을 제공하는
두 가지 데이터 변환 요구 사항이 있습니다.
회사는 예약된 시간에 Amazon S3 에 도착해야 하는 다양한 형식의 300GB 데이터에 대해 매일
변환을 수행해야 합니다. 회사는 S3 데이터 레이크에 있는 테라바이트급의 보관된 데이터를
일회성으로 변환해야 합니다. 이 회사는 Amazon Managed Workflows for Apache
Airflow(Amazon MWAA) 방향성 비순환 그래프(DAG)를 사용하여 처리를 조정합니다.
이러한 요구 사항을 가장 비용 효율적으로 충족하려면 회사가 Amazon MWAA DAG 에서 어떤
작업 조합을 예약해야 합니까? (2 개 선택)
A. 매일 수신되는 데이터의 경우 AWS Glue 크롤러를 사용하여 스키마를 스캔하고 식별합니다.
B. 매일 수신되는 데이터의 경우 Amazon Athena 를 사용하여 스키마를 스캔하고 식별합니다.
C. 매일 수신되는 데이터의 경우 Amazon Redshift 를 사용하여 변환을 수행합니다.
D. 일일 및 보관된 데이터의 경우 Amazon EMR 을 사용하여 데이터 변환을 수행합니다.
E. 보관된 데이터의 경우 Amazon SageMaker 를 사용하여 데이터 변환을 수행합니다.



Answer: A, D
https://www.examtopics.com/discussions/amazon/view/142573-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
소매 회사는 고객 주문에 대한 정보가 포함된 데이터 세트에 대한 추출, 변환 및 로드(ETL)
작업에 AWS Glue 를 사용합니다. 회사는 데이터 정확성과 일관성을 보장하기 위해 특정 유효성
검사 규칙을 구현하려고 합니다.
어떤 솔루션이 이러한 요구 사항을 충족합니까?
A. AWS Glue 작업 북마크를 사용하여 정확성과 일관성을 위해 데이터를 추적하십시오.
B. 사용자 지정 AWS Glue 데이터 품질 규칙 세트를 생성하여 특정 데이터 품질 검사를
정의합니다.
C. 표준 데이터 품질 검증을 위해 내장된 AWS Glue 데이터 품질 변환을 사용합니다.
D. AWS Glue 데이터 카탈로그를 사용하여 중앙 집중식 데이터 스키마와 메타데이터 저장소를
유지합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/142574-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
보험사는 회사에서 gzip 으로 압축한 거래 데이터를 저장합니다.
회사는 비정기적인 감사를 위해 거래 데이터를 쿼리해야 합니다.
가장 비용 효율적인 방식으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?
A. Amazon Glacier 유연한 검색에 데이터를 저장합니다. Amazon S3 Glacier Select 를 사용하여
데이터를 쿼리합니다.
B. Amazon S3 에 데이터를 저장합니다. Amazon S3 Select 를 사용하여 데이터를 쿼리합니다.
C. Amazon S3 에 데이터를 저장합니다. Amazon Athena 를 사용하여 데이터를 쿼리합니다.
D. Amazon Glacier Instant Retrieval 에 데이터를 저장합니다. Amazon Athena 를 사용하여
데이터를 쿼리합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/142575-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/
A??


Q
데이터 엔지니어는 미션 크리티컬하지 않은 테이블에 데이터를 처리하고 삽입하는 Amazon
Redshift 저장 프로시저 테스트를 마쳤습니다. 엔지니어는 저장 프로시저를 매일 자동으로
실행하려고 합니다.
가장 비용 효율적인 방식으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?
A. AWS Lambda 함수를 생성하여 저장 프로시저를 실행하는 크론 작업을 예약합니다.
B. Amazon EC2 스팟 인스턴스에서 Amazon Redshift Data API 를 사용하여 저장 프로시저를
예약하고 실행합니다.
C. 쿼리 편집기 v2 를 사용하여 일정에 따라 저장 프로시저를 실행합니다.
D. AWS Glue Python 셸 작업을 예약하여 저장 프로시저를 실행합니다.



Answer: C
https://www.examtopics.com/discussions/amazon/view/142543-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
마케팅 회사는 클릭스트림 데이터를 수집합니다. 회사는 클릭스트림 데이터를 Amazon Kinesis
Data Firehose 로 보내고 클릭스트림 데이터를 Amazon S3 에 저장합니다. 회사는 여러 부서의
수백 명의 사용자가 사용할 일련의 대시보드를 구축하려고 합니다.
회사는 Amazon QuickSight 를 사용하여 대시보드를 개발할 것입니다. 회사는 클릭스트림 활동에
대한 일일 업데이트를 확장하고 제공할 수 있는 솔루션을 원합니다.
이러한 요구 사항을 가장 비용 효율적으로 충족하는 단계 조합은 무엇입니까? (2 개 선택)
A. Amazon Redshift 를 사용하여 클릭스트림 데이터를 저장하고 쿼리하십시오.
B. Amazon Athena 를 사용하여 클릭스트림 데이터 쿼리
C. Amazon S3 분석을 사용하여 클릭스트림 데이터를 쿼리합니다.
D. QuickSight 직접 SQL 쿼리를 통해 쿼리 데이터에 액세스합니다.
E. QuickSight SPICE (초고속, 병렬, 인메모리 계산 엔진) 를 통해 쿼리 데이터에 액세스합니다.
데이터 세트에 대한 일일 새로 고침을 구성합니다.



Answer: B, E
https://www.examtopics.com/discussions/amazon/view/142576-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어가 데이터 조정 워크플로를 구축하고 있습니다. 데이터 엔지니어는 일부
온프레미스 리소스와 클라우드에 있는 일부 리소스를 포함하는 하이브리드 모델을 사용할
계획입니다. 데이터 엔지니어는 이식성과 오픈 소스 리소스에 우선순위를 두기를 원합니다.
데이터 엔지니어는 온프레미스 환경과 클라우드 기반 환경 모두에서 어떤 서비스를 사용해야
합니까?
A. AWS Data Exchange
B. Amazon Simple Workflow Service (Amazon SWF)
C. Amazon Managed Workflows for Apache Airflow (Amazon MWAA)
D. AWS Glue



Answer: C
https://www.examtopics.com/discussions/amazon/view/142577-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 게임 회사는 NoSQL 데이터베이스를 사용하여 고객 정보를 저장합니다. 회사는 AWS 로
마이그레이션할 계획입니다.
이 회사에는 높은 OLTP(온라인 트랜잭션 처리) 워크로드를 처리하고, 밀리초 단위의 성능을
제공하고, 전 세계적으로 고가용성을 제공할 완전 관리형 AWS 솔루션이 필요합니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. Amazon Keyspaces (for Apache Cassandra)
B. Amazon DocumentDB (with MongoDB compatibility)
C. Amazon DynamoDB
D. Amazon Timestream



Answer: C
https://www.examtopics.com/discussions/amazon/view/142542-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 Amazon EventBridge 이벤트가 호출할 AWS Lambda 함수를 생성합니다.
데이터 엔지니어가 EventBridge 이벤트를 사용하여 Lambda 함수를 호출하려고 하면
AccessDeniedException 메시지가 나타납니다.
데이터 엔지니어는 예외를 어떻게 해결해야 합니까?
A. Lambda 함수 실행 역할의 신뢰 정책이 EventBridge 가 실행 역할을 맡을 수 있도록
허용하는지 확인하십시오.
B. EventBridge 가 사용하는 IAM 역할과 Lambda 함수의 리소스 기반 정책 모두에 필요한
권한이 있는지 확인하십시오.
C. Lambda 함수가 배포된 서브넷이 프라이빗 서브넷으로 구성되어 있는지 확인합니다.
D. EventBridge 스키마가 유효하고 이벤트 매핑 구성이 올바른지 확인하십시오.



Answer: B
https://www.examtopics.com/discussions/amazon/view/142578-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사는 Amazon S3 버킷을 기반으로 하는 데이터 레이크를 사용합니다. 규정을 준수하기
위해 회사는 S3 버킷에 업로드되는 파일에 두 개의 서버 측 암호화 계층을 적용해야 합니다.
회사는 AWS Lambda 함수를 사용하여 필요한 암호화를 적용하려고 합니다.
어떤 솔루션이 이러한 요구 사항을 충족합니까?
A. AWS KMS 키(SSE-KMS)를 사용한 서버 측 암호화와 Amazon S3 암호화 클라이언트를 모두
사용하십시오.
B. AWS KMS 키(DSSE-KMS)와 함께 이중 계층 서버 측 암호화를 사용합니다.
C. 파일을 업로드하기 전에 고객 제공 키(SSE-C)로 서버 측 암호화를 사용합니다.
D. AWS KMS 키(SSE-KMS)로 서버 측 암호화를 사용합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/142579-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 쿼리가 실행되기 전에 Amazon Athena 쿼리가 대기열에 보관되어 있음을
발견했습니다.
데이터 엔지니어는 쿼리가 대기열에 추가되는 것을 어떻게 방지할 수 있나요?
A. 쿼리 결과 제한을 늘립니다.
B. 기존 작업 그룹에 대해 프로비저닝된 용량을 구성합니다.
C. 연합 쿼리를 사용하십시오.
D. Athena 쿼리를 실행하는 사용자를 기존 작업 그룹에 허용합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/142580-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 Amazon S3 에서 읽고 Amazon Redshift 에 쓰는 AWS Glue 작업을
디버깅해야 합니다. 데이터 엔지니어가 AWS Glue 작업에 대한 북마크 기능을 활성화했습니다.
데이터 엔지니어는 AWS Glue 작업의 최대 동시성을 1 로 설정했습니다.
AWS Glue 작업이 Amazon Redshift 에 출력을 성공적으로 쓰고 있습니다. 그러나 이전 AWS
Glue 작업 실행 중에 로드된 Amazon S3 파일은 후속 실행에서 다시 처리됩니다.
AWS Glue 작업이 파일을 재처리하는 이유는 무엇입니까?
A. AWS Glue 작업에는 북마크가 올바르게 작동하는 데 필요한 s3:GetObjectAcl 권한이
없습니다.
B. AWS Glue 작업의 최대 동시성은 1 로 설정됩니다.
C. 데이터 엔지니어가 Glue 작업에 대해 이전 버전의 AWS Glue 를 잘못 지정했습니다.
D. AWS Glue 작업에는 필수 커밋 문이 없습니다.



Answer: A
https://www.examtopics.com/discussions/amazon/view/143046-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/
A??


Q
전자 상거래 회사는 AWS 를 사용하여 온프레미스 환경의 데이터 파이프라인을 AWS 클라우드로
마이그레이션하려고 합니다. 회사는 현재 온프레미스 환경에서 타사 도구를 사용하여 데이터
수집 프로세스를 조정합니다.
회사는 회사에서 서버를 관리할 필요가 없는 마이그레이션 솔루션을 원합니다. 솔루션은 Python
및 Bash 스크립트를 조율할 수 있어야 합니다. 솔루션은 회사가 코드를 리팩터링하도록
요구해서는 안 됩니다.
최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. AWS Lambda
B. Amazon Managed Workflows for Apache Airflow (Amazon MVVAA)
C. AWS Step Functions
D. AWS Glue



Answer: B
https://www.examtopics.com/discussions/amazon/view/143047-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
소매 회사는 PLM(제품 수명 주기 관리) 애플리케이션의 데이터를 온프레미스 MySQL
데이터베이스에 저장합니다. PLM 애플리케이션은 트랜잭션이 발생할 때 데이터베이스를 자주
업데이트합니다.
회사는 PLM 애플리케이션에서 거의 실시간으로 통찰력을 수집하려고 합니다. 회사는 Amazon
Redshift 데이터 웨어하우스를 사용하여 통찰력을 다른 비즈니스 데이터 세트와 통합하고
결합된 데이터 세트를 분석하려고 합니다.
회사는 이미 온프레미스 인프라와 AWS 간에 AWS Direct Connect 연결을 설정했습니다.
최소한의 개발 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. JDBC(Java Database Connectivity) 연결을 사용하여 예약된 AWS Glue ETL(추출, 변환 및
로드) 작업을 실행하여 MySQL 데이터베이스 업데이트를 가져옵니다. Amazon Redshift 를 ETL
작업의 대상으로 설정합니다.
B. AWS Database Migration Service(AWS DMS)에서 전체 로드와 CDC 작업을 실행하여 MySQL
데이터베이스 변경 사항을 지속적으로 복제합니다. Amazon Redshift 를 작업 대상으로
설정합니다.
C. Amazon AppFlow SDK 를 사용하여 MySQL 데이터베이스용 사용자 지정 커넥터를 구축하여
데이터베이스 변경 사항을 지속적으로 복제합니다. Amazon Redshift 를 커넥터의 대상으로
설정합니다.
D. 예약된 AWS DataSync 작업을 실행하여 MySQL 데이터베이스의 데이터를 동기화합니다.
Amazon Redshift 를 작업 대상으로 설정합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/143051-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
마케팅 회사는 Amazon S3 를 사용하여 클릭스트림 데이터를 저장합니다. 회사는 별도의 버킷에
저장된 S3 객체에 대해 SQL JOIN 절을 사용하여 매일 저녁 데이터를 쿼리합니다.
회사는 개체를 기반으로 핵심성과지표(KPI)를 생성합니다. 회사에는 사용자가 데이터를 분할하여
데이터를 쿼리할 수 있는 기능을 제공하는 서버리스 솔루션이 필요합니다. 솔루션은 데이터의
ACID(원자성, 일관성, 격리 및 내구성) 속성을 유지해야 합니다.
이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?
A. Amazon S3 Select
B. Amazon Redshift Spectrum
C. Amazon Athena
D. Amazon EMR



Answer: C
https://www.examtopics.com/discussions/amazon/view/143053-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사는 Account_A 라는 AWS 계정의 eu-east-1 리전에 있는 Amazon RDS for PostgreSQL DB
인스턴스에서 데이터를 마이그레이션하려고 합니다. 회사는 Account_B 라는 AWS 계정의 eu-
west-1 지역에 있는 Amazon Redshift 클러스터로 데이터를 마이그레이션합니다.
AWS Database Migration Service(AWS DMS)에 두 데이터 스토어 간에 데이터를 복제하는
기능을 제공하는 솔루션은 무엇입니까?
A. eu-west-1 의 Account_B 에 AWS DMS 복제 인스턴스를 설정합니다.
B. eu-east-1 의 Account_B 에 AWS DMS 복제 인스턴스를 설정합니다.
C. eu-west-1 의 새 AWS 계정에 AWS DMS 복제 인스턴스를 설정합니다.
D. eu-east-1 의 Account_A 에 AWS DMS 복제 인스턴스를 설정합니다.



Answer: A
https://www.examtopics.com/discussions/amazon/view/143054-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/
B??


Q
한 회사는 Amazon S3 를 데이터 레이크로 사용합니다. 이 회사는 다중 노드 Amazon Redshift
클러스터를 사용하여 데이터 웨어하우스를 설정했습니다. 회사는 각 데이터 파일의 데이터
소스를 기반으로 데이터 레이크에 데이터 파일을 구성합니다.
회사는 각 데이터 파일 위치에 대해 별도의 COPY 명령을 사용하여 Redshift 클러스터의 하나의
테이블에 모든 데이터 파일을 로드합니다. 이 접근 방식은 모든 데이터 파일을 테이블에
로드하는 데 오랜 시간이 걸립니다. 회사는 데이터 수집 속도를 높여야 합니다. 회사는 프로세스
비용 증가를 원하지 않습니다.
어떤 솔루션이 이러한 요구 사항을 충족합니까?
A. 프로비저닝된 Amazon EMR 클러스터를 사용하여 모든 데이터 파일을 하나의 폴더에
복사합니다. COPY 명령을 사용하여 Amazon Redshift 에 데이터를 로드합니다.
B. 모든 데이터 파일을 Amazon Aurora 에 병렬로 로드합니다. AWS Glue 작업을 실행하여
Amazon Redshift 에 데이터를 로드합니다.
C. AWS Give 작업을 사용하여 모든 데이터 파일을 하나의 폴더에 복사합니다. COPY 명령을
사용하여 Amazon Redshift 에 데이터를 로드합니다.
D. 데이터 파일 위치가 포함된 매니페스트 파일을 만듭니다. COPY 명령을 사용하여 Amazon
Redshift 에 데이터를 로드합니다.



Answer: D
https://www.examtopics.com/discussions/amazon/view/143056-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 회사는 Amazon Kinesis Data Firehose 를 사용하여 Amazon S3 에 데이터를 저장할
계획입니다. 소스 데이터는 2MB .csv 파일로 구성됩니다. 회사는 .csv 파일을 JSON 형식으로
변환해야 합니다. 회사는 파일을 Apache Parquet 형식으로 저장해야 합니다.
최소한의 개발 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. Kinesis Data Firehose 를 사용하여 .csv 파일을 JSON 으로 변환합니다. AWS Lambda 함수를
사용하여 파일을 Parquet 형식으로 저장합니다.
B. Kinesis Data Firehose 를 사용하여 .csv 파일을 JSON 으로 변환하고 파일을 Parquet 형식으로
저장합니다.
C. Kinesis Data Firehose 를 사용하여 .csv 파일을 JSON 으로 변환하고 파일을 Parquet 형식으로
저장하는 AWS Lambda 함수를 호출합니다.
D. Kinesis Data Firehose 를 사용하여 .csv 파일을 JSON 으로 변환하는 AWS Lambda 함수를
호출합니다. Kinesis Data Firehose 를 사용하여 파일을 Parquet 형식으로 저장합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/143057-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사는 AWS Transfer Family 서버를 사용하여 온프레미스 환경에서 AWS 로 데이터를
마이그레이션하고 있습니다. 회사 정책에 따라 TLS 1.2 이상을 사용하여 전송 중인 데이터를
암호화해야 합니다.
어떤 솔루션이 이러한 요구 사항을 충족합니까?
A. Transfer Family 서버에 대한 새 SSH 키를 생성합니다. 이전 키와 새 키를 사용할 수 있도록
만드세요.
B. TLS 1.2 이상을 사용하는 연결만 허용하도록 온프레미스 네트워크에 대한 보안 그룹 규칙을
업데이트합니다.
C. Transfer Family 서버의 보안 정책을 업데이트하여 TLS 1.2 의 최소 프로토콜 버전을
지정합니다.
D. Transfer Family 서버에 SSL 인증서를 설치하여 TLS 1.2 를 사용하여 데이터 전송을
암호화합니다.



Answer: C
https://www.examtopics.com/discussions/amazon/view/143058-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사에서 애플리케이션과 온프레미스 Apache Kafka 서버를 AWS 로 마이그레이션하려고 합니다.
애플리케이션은 온프레미스 Oracle 데이터베이스가 Kafka 서버로 보내는 증분 업데이트를
처리합니다. 회사에서는 리팩터링 전략 대신 리프랫폼 마이그레이션 전략을 사용하려고 합니다.
최소한의 관리 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?
A. Amazon Kinesis 데이터 스트림
B. Amazon Managed Streaming for Apache Kafka(Amazon MSK) 프로비저닝 클러스터
C. Amazon Kinesis Data Firehose
D. Apache Kafka(Amazon MSK) 서버리스용 Amazon 관리형 스트리밍



Answer: D
https://www.examtopics.com/discussions/amazon/view/143060-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 AWS Glue 를 사용하여 자동화된 ETL(추출, 변환 및 로드) 수집 파이프라인을
구축하고 있습니다. 파이프라인은 Amazon S3 버킷에 있는 압축 파일을 수집합니다. 수집
파이프라인은 증분 데이터 처리를 지원해야 합니다.
이 요구 사항을 충족하려면 데이터 엔지니어가 사용해야 하는 AWS Glue 기능은 무엇입니까?
A. 워크플로 (Workflows)
B. 트리거 (Triggers)
C. 작업 북마크 (Job bookmarks)
D. 분류기 (Classifiers)



Answer: C
https://www.examtopics.com/discussions/amazon/view/143061-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 은행 회사는 애플리케이션을 사용하여 대량의 거래 데이터를 수집합니다. 이 회사는 실시간
분석을 위해 Amazon Kinesis Data Streams 를 사용합니다. 회사의 애플리케이션은 PutRecord
작업을 사용하여 Kinesis Data Streams 로 데이터를 보냅니다.
데이터 엔지니어가 하루 중 특정 시간 동안 네트워크 중단을 관찰했습니다. 데이터 엔지니어는
전체 처리 파이프라인에 대해 정확히 1 회 전달을 구성하려고 합니다.
이 요구 사항을 충족하는 솔루션은 무엇입니까?
A. 소스의 각 레코드에 고유 ID 를 삽입하여 처리 중에 중복 항목을 제거할 수 있도록
애플리케이션을 설계합니다.
B. 이벤트 중복 처리를 방지하려면 Apache Flink 용 Amazon Managed Service(이전의 Amazon
Kinesis Data Analytics) 데이터 수집 애플리케이션의 체크포인트 구성을 업데이트하세요.
C. 이벤트가 Kinesis Data Streams 에 여러 번 수집되지 않도록 데이터 소스를 설계합니다.
D. Kinesis Data Streams 사용을 중지합니다. 대신 Amazon EMR 을 사용하십시오. Amazon
EMR 에서 Apache Flink 및 Apache Spark 스트리밍을 사용하십시오.



Answer: A
https://www.examtopics.com/discussions/amazon/view/143062-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
회사는 Amazon S3 버킷에 로그를 저장합니다. 데이터 엔지니어가 여러 로그 파일에
액세스하려고 시도할 때 데이터 엔지니어는 일부 파일이 의도치 않게 삭제되었음을 발견합니다.
데이터 엔지니어에게는 향후 의도하지 않은 파일 삭제를 방지하는 솔루션이 필요합니다.
최소한의 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?
A. 정기적으로 S3 버킷을 수동으로 백업하십시오.
B. S3 버킷에 대해 S3 버전 관리를 활성화합니다.
C. S3 버킷에 대한 복제를 구성합니다.
D. Amazon S3 Glacier 스토리지 클래스를 사용하여 S3 버킷에 있는 데이터를 보관합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/143120-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
한 통신 회사는 초당 수천 개의 데이터 포인트의 속도로 매일 네트워크 사용 데이터를
수집합니다. 회사는 사용 데이터를 실시간으로 처리하기 위해 애플리케이션을 실행합니다.
회사는 Amazon Aurora DB 인스턴스에 데이터를 집계하고 저장합니다.
네트워크 사용량이 갑자기 감소하면 일반적으로 네트워크 중단을 나타냅니다. 회사는 네트워크
사용량의 급격한 감소를 식별하여 즉각적인 해결 조치를 취할 수 있어야 합니다.
가장 짧은 대기 시간으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?
A. Aurora 에 네트워크 사용량 감소를 쿼리하는 AWS Lambda 함수를 생성하십시오. Amazon
EventBridge 를 사용하여 매분 자동으로 Lambda 함수를 호출합니다.
B. Amazon Kinesis 데이터 스트림에 데이터를 게시하도록 처리 애플리케이션을 수정합니다.
네트워크 사용량 감소를 감지하기 위해 Apache Flink 용 Amazon Managed Service(이전의
Amazon Kinesis Data Analytics) 애플리케이션을 생성합니다.
C. Aurora 데이터베이스를 Amazon DynamoDB 테이블로 교체합니다. 매분마다 네트워크 사용량
감소를 DynamoDB 테이블에 쿼리하는 AWS Lambda 함수를 생성합니다. 처리 애플리케이션과
DynamoDB 테이블 사이에 DynamoDB Accelerator(DAX)를 사용합니다.
D. Aurora 의 데이터베이스 활동 스트림 기능 내에서 AWS Lambda 함수를 생성하여 네트워크
사용량 감소를 감지합니다.



Answer: B
https://www.examtopics.com/discussions/amazon/view/143122-exam-aws-certified-data-
engineer-associate-dea-c01-topic-1/


Q
데이터 엔지니어는 Amazon S3에 있는 여러 테라바이트의 원시 데이터를 처리하고 분석하고 있습니다. 데이터 엔지니어는 데이터를 정리하고 준비해야 합니다. 그런 다음 데이터 엔지니어는 분석을 위해 Amazon Redshift에 데이터를 로드해야 합니다. 데이터
엔지니어는 데이터 분석가에게 복잡한 쿼리를 수행할 수 있는 솔루션을 필요로 합니다. 솔루션은 복잡한 추출, 변환 및 로드(ETL) 프로세스를 수행하거나 인프라를 관리할 필요성을 없애야 합니다.
어떤 솔루션이 최소한의 운영 오버헤드로 이러한 요구 사항을 충족할까요?

A. Amazon EMR을 사용하여 데이터를 준비합니다. AWS Step Functions를 사용하여 데이터를 Amazon Redshift에 로드합니다. Amazon QuickSight를 사용하여 쿼리를 실행합니다.
B. AWS Glue DataBrew를 사용하여 데이터를 준비합니다. AWS Glue를 사용하여 데이터를 Amazon Redshift에 로드합니다. Amazon Redshift를 사용하여 쿼리를 실행합니다.
C. AWS Lambda를 사용하여 데이터를 준비합니다. Amazon Kinesis Data Firehose를 사용하여 데이터를 Amazon Redshift에 로드합니다. Amazon Athena를 사용하여 쿼리를 실행합니다.
D. AWS Glue를 사용하여 데이터를 준비합니다. AWS Database Migration Service(AVVS DMS)를 사용하여 데이터를 Amazon Redshift에 로드합니다. Amazon Redshift Spectrum을 사용하여 쿼리를 실행합니다.


Answer: B


Q
한 회사에서 AWS Lambda 함수를 사용하여 레거시 SFTP 환경에서 Amazon S3 버킷으로 파일을 전송합니다. Lambda 함수는 VPC가 활성화되어 Lambda 함수와 동일한 VPC 환경에 있는 다른 AVS 서비스 간의 모든 통신이 보안 네트워크를 통해 이루어지도록 합니다.
Lambda 함수는 SFTP 환경에 성공적으로 연결할 수 있습니다. 그러나 Lambda 함수가 S3 버킷에 파일을 업로드하려고 하면 Lambda 함수가 시간 초과 오류를 반환합니다. 데이터 엔지니어는 시간 초과 문제를 안전한 방식으로 해결해야 합니다.
어떤 솔루션이 이러한 요구 사항을 가장 비용 효율적인 방식으로 충족할까요?

A. VPC의 퍼블릭 서브넷에 NAT 게이트웨이를 만듭니다. 네트워크 트래픽을 NAT 게이트웨이로 라우팅합니다.
B. Amazon S3에 대한 VPC 게이트웨이 엔드포인트를 만듭니다. 네트워크 트래픽을 VPC 게이트웨이 엔드포인트로 라우팅합니다.
C. Amazon S3에 대한 VPC 인터페이스 엔드포인트를 만듭니다. 네트워크 트래픽을 VPC 인터페이스 엔드포인트로 라우팅합니다.
D. VPC 인터넷 게이트웨이를 사용하여 인터넷에 연결합니다. 네트워크 트래픽을 VPC 인터넷 게이트웨이로 라우팅합니다.


Answer: B


Q
한 회사가 Amazon RDS에서 실행되는 고객 데이터베이스에서 데이터를 읽습니다. 데이터베이스에는 일관되지 않은 필드가 많이 있습니다. 예를 들어, 한 데이터베이스에서 place_id라는 iPnamed 고객 레코드 필드가 다른 데이터베이스에서는 location_id라는 이름이 지정됩니다. 이 회사는 고객 레코드 필드가 일치하지 않더라도 여러 데이터베이스에서 고객 레코드를 연결해야 합니다.
어떤 솔루션이 최소한의 운영 오버헤드로 이러한 요구 사항을 충족할까요?

A. 데이터베이스의 데이터를 처리하고 분석하기 위해 프로비저닝된 Amazon EMR 클러스터를 만듭니다. Apache Zeppelin 노트북에 연결합니다. FindMatches 변환을 사용하여 데이터에서 중복 레코드를 찾습니다.
B. AWS Glue 크롤러를 만들어 데이터베이스를 크롤링합니다. FindMatches 변환을 사용하여 데이터에서 중복 레코드를 찾습니다. 성능과 결과를 평가하여 변환을 평가하고 조정합니다.
C. AWS Glue 크롤러를 만들어 데이터베이스를 크롤링합니다. Amazon SageMaker를 사용하여 Apache Spark ML 파이프라인을 구성하여 데이터에서 중복 레코드를 찾습니다.
D. 데이터베이스의 데이터를 처리하고 분석하기 위해 프로비저닝된 Amazon EMR 클러스터를 만듭니다. Apache Zeppelin 노트북에 연결합니다. Apache Spark ML 모델을 사용하여 데이터에서 중복 레코드를 찾습니다. 성능과 결과를 평가하여 모델을 평가하고 조정합니다.


Answer: B


Q
금융 회사가 타사 데이터 공급자로부터 데이터를 수신하여 Amazon S3 버킷에 객체로 저장합니다.
이 회사는 객체에서 AWS Glue 크롤러를 실행하여 데이터 카탈로그를 만들었습니다. AWS Glue 크롤러는 여러 테이블을 만들었습니다. 그러나 이 회사는 크롤러가 하나의 테이블만 만들 것으로 예상했습니다.
이 회사는 AVS Glue 크롤러가 하나의 테이블만 만들도록 보장하는 솔루션이 필요합니다.
이 요구 사항을 충족하는 솔루션 조합은 무엇입니까? (두 가지를 선택하십시오.)

A. 각 개체의 개체 형식, 압축 유형 및 스키마가 동일한지 확인하세요.
B. 각 객체에 대해 객체 형식과 스키마가 동일한지 확인합니다. 각 객체의 압축 유형에 대해 일관성을 강제하지 마십시오.
C. 각 객체에 대해 스키마가 동일한지 확인합니다. 각 객체의 파일 형식과 압축 유형에 대해 일관성을 강제하지 마십시오.
D. 각 S3 객체 이름의 접두사 구조가 일관성을 유지하는지 확인하세요.
E. 모든 S3 객체 이름이 비슷한 패턴을 따르는지 확인하세요.


Answer: A,D


Q
애플리케이션은 Amazon Simple Queue Service(Amazon SQS) 대기열에서 메시지를 사용합니다. 애플리케이션은 가끔 다운타임을 경험합니다. 다운타임의 결과로 대기열 내의 메시지는 만료되고 1일 후에 삭제됩니다. 메시지 삭제로 인해 애플리케이션의 데이터 손실이 발생합니다.
어떤 솔루션이 애플리케이션의 데이터 손실을 최소화할까요? (두 가지를 선택하세요.)

A. 메시지 보관 기간 증가
B. 가시성 시간 초과를 늘립니다.
C. SQS 대기열에 배달 못한 편지 대기열(DLQ)을 연결합니다.
D. 지연 큐를 사용하여 메시지 전달을 지연합니다.
E. 메시지 처리 시간을 단축합니다.


Answer: A,C


Q
한 회사가 시계열 데이터를 시각화하기 위해 거의 실시간 대시보드를 만들고 있습니다. 이 회사는 Amazon Managed Streaming for Apache Kafka(Amazon MSK)에 데이터를 수집합니다. 사용자 지정 데이터 파이프라인이 데이터를 사용합니다. 그런 다음 파이프라인은 Amazon Keyspaces(Apache Cassandra용), Amazon OpenSearch Service, Amazon S3의 Apache Avro 객체에 데이터를 씁니다.
어떤 솔루션이 가장 짧은 지연 시간으로 데이터 시각화에 데이터를 사용할 수 있게 할까요?

A. OpenSearch 서비스의 데이터를 사용하여 OpenSearch 대시보드를 만듭니다.
B. Apache Hive 메타스토어와 함께 Amazon Athena를 사용하여 Amazon S3의 Avro 객체를 쿼리합니다. Amazon Managed Grafana를 사용하여 Athena에 연결하고 대시보드를 만듭니다.
C. Amazon Athena를 사용하여 Amazon S3의 Avro 객체에서 데이터를 쿼리합니다. Amazon Keyspaces를 데이터 카탈로그로 구성합니다. Amazon QuickSight를 Athena에 연결하여 대시보드를 만듭니다.
D. AWS Glue를 사용하여 데이터를 카탈로그화합니다. S3 Select를 사용하여 Amazon S3의 Avro 객체를 쿼리합니다. Amazon QuickSight를 S3 버킷에 연결하여 대시보드를 만듭니다.


Answer: A


Q
한 회사가 S3 Standard 스토리지 클래스의 수천 개의 Amazon S3 버킷에 페타바이트 규모의 데이터를 저장합니다. 이 데이터는 예측 불가능하고 가변적인 데이터 액세스 패턴을 가진 분석 워크로드를 지원합니다.
이 회사는 몇 달 동안 일부 데이터에 액세스하지 않습니다. 그러나 이 회사는 밀리초 이내에 모든 데이터를 검색할 수 있어야 합니다. 이 회사는 S3 스토리지 비용을 최적화해야 합니다.
어떤 솔루션이 최소한의 운영 오버헤드로 이러한 요구 사항을 충족할까요?

A. S3 Storage Lens 표준 메트릭을 사용하여 객체를 더 비용 최적화된 스토리지 클래스로 옮길 시기를 결정합니다. S3 버킷에 대한 S3 수명 주기 정책을 만들어 객체를 비용 최적화된 스토리지 클래스로 옮깁니다. 향후에도 S3 수명 주기 정책을 계속 개선하여 스토리지 비용을 최적화합니다.
B. S3 Storage Lens 활동 메트릭을 사용하여 회사에서 드물게 액세스하는 S3 버킷을 식별합니다. 데이터의 나이에 따라 S3 Standard에서 S3 Standard-Infrequent Access(S3 Standard-IA) 및 S3 Glacier 스토리지 클래스로 객체를 이동하도록 S3 Lifecycle 규칙을 구성합니다.
C. S3 Intelligent-Tiering을 사용합니다. Deep Archive Access 계층을 활성화합니다.
D. S3 Intelligent-Tiering을 사용합니다. 기본 액세스 계층을 사용합니다.


Answer: D


Q
미디어 회사가 Amazon OpenSearch Service를 사용하여 인기 있는 음악가와 노래에 대한 실시간 데이터를 분석하려고 합니다. 이 회사는 매일 수백만 개의 새로운 데이터 이벤트를 수집할 것으로 예상합니다. 새로운 데이터 이벤트는 Amazon Kinesis 데이터 스트림을 통해 도착합니다. 이 회사는 데이터를 변환한 다음 OpenSearch Service 도메인으로 데이터를 수집해야 합니다.
이 회사는 최소한의 운영 오버헤드로 데이터를 수집하기 위해 어떤 방법을 사용해야 합니까?

A. Amazon Kinesis Data Firehose와 AWS Lambda 함수를 사용하여 데이터를 변환하고 변환된 데이터를 OpenSearch Service에 전달합니다.
B. 사전 구축된 필터가 있는 Logstash 파이프라인을 사용하여 데이터를 변환하고 변환된 데이터를 OpenSearch Service에 전달합니다.
C. AWS Lambda 함수를 사용하여 Amazon Kinesis Agent를 호출하여 데이터를 변환하고 변환된 데이터를 OpenSearch Service에 제공합니다.
D. Kinesis Client Library(KCL)를 사용하여 데이터를 변환하고 변환된 데이터를 OpenSearch Service로 전달합니다.


Answer: A


Q
한 회사가 고객 주소가 포함된 고객 데이터 테이블을 AWS Lake Formation 데이터 레이크에 저장합니다. 새로운 규정을 준수하기 위해 회사는 사용자가 캐나다에 있는 고객의 데이터에 액세스할 수 없도록 해야 합니다.
이 회사는 사용자가 캐나다에 있는 고객의 행에 액세스하지 못하도록 하는 솔루션이 필요합니다.
어떤 솔루션이 최소한의 운영 노력으로 이 요구 사항을 충족할까요?

A. 국가가 캐나다인 행에 사용자가 액세스하지 못하도록 행 수준 필터를 설정합니다.
B. 국가가 캐나다인 주소로 사용자 액세스를 제한하는 IAM 역할을 생성합니다.
C. 국가가 캐나다인 행에 사용자가 액세스하지 못하도록 열 수준 필터를 설정합니다.
D. 캐나다가 국가인 모든 행에 태그를 적용합니다. 태그가 "캐나다"와 같은 경우 사용자 액세스를 차단합니다.


Answer: A


Q
한 회사가 Amazon Redshift에 레이크 하우스 아키텍처를 구현했습니다. 이 회사는 타사 ID 공급자(IdP)를 사용하여 Redshift 쿼리 편집기에 인증할 수 있는 기능을 사용자에게 제공해야 합니다.
데이터 엔지니어는 인증 메커니즘을 설정해야 합니다.
이 요구 사항을 충족하기 위해 데이터 엔지니어가 취해야 할 첫 번째 단계는 무엇입니까?

A. Redshift 클러스터의 구성 설정에서 타사 IdP를 ID 공급자로 등록합니다.
B. Amazon Redshift에서 타사 IdP를 ID 공급자로 등록합니다.
C. AVS Secrets Manager의 ID 공급자로 타사 IdP를 등록합니다. Amazon Redshift를 구성하여 Secrets Manager를 사용하여 사용자 자격 증명을 관리합니다.
D. AWS Certificate Manager(ACM)의 ID 공급자로 타사 IdP를 등록합니다. Amazon Redshift를 구성하여 ACM을 사용하여 사용자 자격 증명을 관리합니다.


Answer: A


Q
한 회사는 현재 범용 Amazon EC2 인스턴스를 포함하는 프로비저닝된 Amazon EMR 클러스터를 사용하고 있습니다. EMR 클러스터는 회사의 장기 실행 Apache Spark 추출, 변환 및 로드(ETL) 작업에 대해 1~5개 작업 노드 간에 EMR 관리 확장을 사용합니다. 회사는 매일 ETL 작업을 실행합니다.
회사에서 ETL 작업을 실행하면 EMR 클러스터가 최대 5개 노드까지 빠르게 확장됩니다. EMR 클러스터는 종종 최대 CPU 사용량에 도달하지만 메모리 사용량은 30% 미만으로 유지됩니다.
회사는 EMR 클러스터 구성을 수정하여 일일 ETL 작업을 실행하는 데 드는 EMR 비용을 줄이려고 합니다.
이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?

A. EMR 관리형 스케일링을 위한 최대 작업 노드 수를 10개로 늘립니다.
B. 일반 용도 EC2 인스턴스에서 메모리 최적화된 EC2 인스턴스로 작업 노드 유형을 변경합니다.
C. 일반 용도 Re 인스턴스에서 컴퓨팅 최적화된 EC2 인스턴스로 작업 노드 유형을 전환합니다.
D. 프로비저닝된 EMR 클러스터에 대한 스케일링 쿨다운 기간을 줄입니다.


Answer: C


Q
한 회사가 .csv 파일을 Amazon S3 버킷에 업로드합니다. 회사의 데이터 플랫폼 팀은 AWS Glue 크롤러를 설정하여 데이터 검색을 수행하고 테이블과 스키마를 만들었습니다.
AWS Glue 작업은 테이블에서 처리된 데이터를 Amazon Redshift 데이터베이스에 씁니다. AWS Glue 작업은 열 매핑을 처리하고 Redshift 데이터베이스에 Amazon Redshift 테이블을 적절히 만듭니다.
회사가 어떤 이유로든 AWS Glue 작업을 다시 실행하면 Amazon Redshift 테이블에 중복 레코드가 추가됩니다. 회사에는 중복 없이 Redshift 테이블을 업데이트하는 솔루션이 필요합니다.
어떤 솔루션이 이러한 요구 사항을 충족할까요?

A. AWS Glue 작업을 수정하여 행을 스테이징 Redshift 테이블로 복사합니다. SQL 명령을 추가하여 스테이징 Redshift 테이블의 새 값으로 기존 행을 업데이트합니다.
B. AWS Glue 작업을 수정하여 이전에 삽입한 데이터를 MySQL 데이터베이스에 로드합니다. MySQL 데이터베이스에서 upsert 작업을 수행합니다. 결과를 Amazon Redshift 테이블에 복사합니다.
C. Apache Spark의 DataFrame dropDuplicates() API를 사용하여 중복을 제거합니다. Redshift 테이블에 데이터를 씁니다.
D. AWS Glue ResolveChoice 기본 제공 변환을 사용하여 가장 최근 레코드에서 열 값을 선택합니다.


Answer: A


Q
한 회사가 여러 데이터 소스에서 데이터를 수집하여 Amazon S3 버킷에 저장합니다. AWS Glue 추출, 변환 및 로드(ETL) 작업은 데이터를 변환하고 변환된 데이터를 Amazon S3 기반 데이터 레이크에 씁니다. 이 회사는 Amazon Athena를 사용하여 데이터 레이크에 있는 데이터를 쿼리합니다. 이 회사는
레코드에 공통 고유 식별자가 없는 경우에도 일치하는 레코드를 식별해야 합니다.
어떤 솔루션이 이 요구 사항을 충족할까요?

A. ETL 작업의 일부로 Amazon Macie 패턴 매칭을 사용합니다.
B. ETL 작업에서 AWS Glue PySpark Filter 클래스를 훈련하고 사용합니다.
C. 테이블을 분할하고 ETL 작업을 사용하여 고유 식별자를 기준으로 데이터를 분할합니다.
D. ETL 작업에서 AWS Lake Formation FindMatches 변환을 훈련하고 사용합니다.


Answer: D


Q
데이터 엔지니어가 AWS Glue 크롤러를 사용하여 Amazon S3 버킷에 있는 데이터를 카탈로그화하고 있습니다. S3 버킷에는 .csv와 json 파일이 모두 들어 있습니다. 데이터 엔지니어는 카탈로그에서 .json 파일을 제외하도록 크롤러를 구성했습니다. 데이터 엔지니어가
Amazon Athena에서 쿼리를 실행하면 쿼리는 제외된 .json 파일도 처리합니다. 데이터 엔지니어는 이 문제를 해결하려고 합니다. 데이터 엔지니어는 소스 S3 버킷의 .csv 파일에 대한 액세스 요구 사항에 영향을 미치지 않는 솔루션이 필요합니다.
가장 짧은 쿼리 시간으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?

A. AWS Glue 크롤러 설정을 조정하여 AWS Glue 크롤러가 .json 파일도 제외하도록 합니다.
B. Athena 콘솔을 사용하여 Athena 쿼리가 .json 파일을 제외하는지 확인합니다.
C. .json 파일을 S3 버킷 내의 다른 경로로 다시 배치합니다.
D. S3 버킷 정책을 사용하여 .json 파일에 대한 액세스를 차단합니다.


Answer: C


Q
데이터 엔지니어가 Amazon S3 버킷에 저장된 객체를 읽기 위해 AWS Lambda 함수를 설정했습니다. 객체는 AWS KMS 키로 암호화됩니다. 데이터
엔지니어는 Lambda 함수의 실행 역할을 구성하여 S3 버킷에 액세스했습니다. 그러나 Lambda 함수에서 오류가 발생하여 객체의 콘텐츠를 검색하지 못했습니다.
오류의 원인은 무엇일까요?

A. 데이터 엔지니어가 S3 버킷의 권한을 잘못 구성했습니다. Lambda 함수가 객체에 액세스할 수 없습니다.
B. Lambda 함수가 오래된 SDK 버전을 사용하고 있어 읽기 오류가 발생했습니다.
C. S3 버킷은 데이터 엔지니어가 일하는 지역과 다른 AWS 지역에 있습니다. 지연 문제로 인해 Lambda 함수에 오류가 발생했습니다.
D. Lambda 함수의 실행 역할에는 S3 객체를 해독할 수 있는 KMS 키에 액세스하는 데 필요한 권한이 없습니다.


Answer: D


Q
데이터 엔지니어가 1,000개의 AWS Glue Data Catalog 테이블에 데이터 품질 규칙을 구현했습니다. 최근 비즈니스 요구 사항이 변경되어 데이터 엔지니어가 데이터 품질 규칙을 편집해야 합니다.
데이터 엔지니어는 최소한의 운영 오버헤드로 이 요구 사항을 어떻게 충족해야 할까요?

A. AWS Glue ETL에서 파이프라인을 만들어 1,000개의 Data Catalog 테이블 각각에 대한 규칙을 편집합니다. AWS Lambda 함수를 사용하여 각 Data Catalog 테이블에 해당하는 AWS Glue 작업을 호출합니다.
B. AWS Glue Data Quality에 대한 API 호출을 수행하여 편집을 수행하는 AWS Lambda 함수를 생성합니다.
C. Amazon EMR 클러스터를 만듭니다. 각 Data Catalog 테이블에 대한 규칙을 편집하는 Amazon EMR에서 파이프라인을 실행합니다. AWS Lambda 함수를 사용하여 EMR 파이프라인을 실행합니다.
D. AWS Management Console을 사용하여 Data Catalog 내의 규칙을 편집합니다.


Answer: B


Q
두 개발자가 별도의 애플리케이션 릴리스를 작업하고 있습니다. 개발자는 GitHub 저장소의 마스터 브랜치를 소스로 사용하여 Branch A와 Branch B라는 기능 브랜치를 만들었습니다.
Branch A의 개발자는 프로덕션 시스템에 코드를 배포했습니다. Branch B의 코드는 다음 주에 예정된 애플리케이션 릴리스에서 마스터 브랜치에 병합됩니다. Branch
B의 개발자는 마스터 브랜치에 풀 리퀘스트를 제기하기 전에 어떤 명령을 실행해야 합니까?

A. git diff branchB master
git commit -m
B. git pull master
C. git rebase master
D. git fetch -b master


Answer: C


Q
한 회사가 직원 데이터를 Amazon Resdshift에 저장합니다. Employee라는 테이블은 Region ID, Department ID, Role ID라는 열을 복합 정렬 키로 사용합니다.
어떤 쿼리가 테이블의 복합 정렬 키를 사용하여 쿼리 속도를 가장 높일까요? (두 가지를 선택하세요.)

A. 지역 ID가 '북미'인 직원을 선택하세요.
B. 지역 ID='북미'이고 부서 ID=20인 직원을 선택합니다.
C. 부서 ID=20이고 지역 ID='북미'인 직원을 선택합니다.
D. 역할 ID가 50인 직원을 선택하세요.
E. 지역 ID='북미'이고 역할 ID=50인 직원을 선택합니다.


Answer: B,E


Q
한 회사가 전 세계에 위치한 테스트 시설에서 테스트 결과를 받습니다. 이 회사는 테스트 결과를 Amazon S3 버킷에 있는 수백만 개의 1KB JSON 파일로 저장합니다. 데이터 엔지니어는 파일을 처리하고 Apache Parquet 형식으로 변환하여 Amazon Redshift 테이블에 로드해야 합니다. 데이터 엔지니어는 AWS Glue를 사용하여 파일을 처리하고, AWS Step Functions를 사용하여 프로세스를 조정하고, Amazon EventBridge를 사용하여 작업을 예약합니다.
이 회사는 최근에 더 많은 테스트 시설을 추가했습니다. 파일을 처리하는 데 필요한 시간이 증가하고 있습니다. 데이터 엔지니어는 데이터 처리 시간을 줄여야 합니다.
어떤 솔루션이 데이터 처리 시간을 가장 많이 줄여줄까요?

A. AWS Lambda를 사용하여 원시 입력 파일을 더 큰 파일로 그룹화합니다. 더 큰 파일을 Amazon S3에 다시 씁니다. AWS Glue를 사용하여 파일을 처리합니다. 파일을 Amazon Redshift 테이블에 로드합니다.
B. AWS Glue 동적 프레임 파일 그룹화 옵션을 사용하여 원시 입력 파일을 수집합니다. 파일을 처리합니다. 파일을 Amazon Redshift 테이블에 로드합니다.
C. Amazon Redshift COPY 명령을 사용하여 원시 입력 파일을 Amazon S3에서 Amazon Redshift 테이블로 직접 이동합니다. Amazon Redshift에서 파일을 처리합니다.
D. AWS Glue 대신 Amazon EMR을 사용하여 원시 입력 파일을 그룹화합니다. Amazon EMR에서 파일을 처리합니다. 파일을 Amazon Redshift 테이블에 로드합니다.


Answer: B


Q
데이터 엔지니어는 Amazon Managed Workflows for Apache Airflow(Amazon MWAA)를 사용하여 AWS 계정에서 데이터 파이프라인을 실행합니다.
최근 워크플로가 실행되지 않았습니다. 데이터 엔지니어는 Apache Airflow 로그를 사용하여 워크플로 실패를 진단해야 합니다.
데이터 엔지니어는 어떤 로그 유형을 사용하여 실패 원인을 진단해야 합니까?

A. YourEnvironmentName-웹서버
B. YourEnvironmentName-Scheduler
C. YourEnvironmentName-DAGProcessing
D. YourEnvironmentName-Task

Answer: D
`;
