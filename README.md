# CS

Project is written in [TypeScript](https://www.typescriptlang.org/) and built with [React](https://react.dev/) framework.

**Table of Contents**

- [CS](#cs)
  - [Requirements](#requirements)
  - [Setup](#setup)
    - [Clone repository](#clone-repository)
    - [Setup environment](#setup-environment)
    - [Build instructions](#build-instructions)
    - [Start](#start)
  - [React Application Deployment with Docker](#react-application-deployment-with-docker)
    - [Prerequisites](#prerequisites)
    - [Dockerfile Explanation](#dockerfile-explanation)
    - [Building and Running the Docker Container](#building-and-running-the-docker-container)

## Requirements

- Node.js >=14.0.0
- Npm

## Setup

### Clone repository

```bash
git clone git@github.com:ke-va/cs-app.git
npm install
```

### Build instructions
```bash
npm run build
```

### Start

```bash
npm run start
```

# React Application Deployment with Docker

This guide will help you build and deploy your React application using Docker and Nginx.

## Prerequisites

- Docker installed on your machine
- Basic knowledge of Docker commands

## Dockerfile Explanation

The provided `Dockerfile` consists of two stages:

1. **Build Stage**: Uses a Node.js image to build the React application.
2. **Serve Stage**: Uses an Nginx image to serve the built application.

## Building and Running the Docker Container

Follow these steps to build and run the Docker container:

1. **Build the Docker Image**:

  ```sh
  docker build -t react-app .
  ```

2. **Run the Docker Image**
  ```sh
  docker run -p 3000:80 react-app
  ```

3. **List Running Containers**
  ```sh
    docker ps
  ```

4. **Stop the Container**
  ```sh
    docker stop <container_id_or_name>
  ```