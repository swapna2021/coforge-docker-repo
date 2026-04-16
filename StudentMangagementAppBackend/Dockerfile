FROM eclipse-temurin:17-jre
WORKDIR /app
COPY target/studentmanagementapp.war studentmanagementapp.war 
EXPOSE 8082
ENTRYPOINT ["java","-jar","/app/studentmanagementapp.war" ]
