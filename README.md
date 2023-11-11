### BuddyGet

BuddyGet, your personal finance manager. Allows for setting your budget, and tracking your expenses.

This is a sample repository that has been worked on, and can be deployed over kubernetes. 

### Prerequisites

#### Docker
Docker is required to build the image if wanted separately. You can download it from [here](https://docs.docker.com/get-docker/)

#### Kubernetes
Kubernetes is required to deploy the application. You can download it from [here](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

#### Minikube
Minikube is required to deploy the application locally. You can download it from [here](https://minikube.sigs.k8s.io/docs/start/)

### Deployment

To run the application locally, we'll need to start the minikube cluster. Run the following command,

```bash
minikube start
```

Before building the images, we'll make sure we're on the right docker daemon according to MiniKube. Run this command,

```bash
eval $(minikube docker-env)
```

Now, we can build the images. Run the following commands,

```bash
docker build -t buddy-get-fe:latest ./frontend
docker build -t buddy-get-be:latest ./backend
```

Now, we can deploy the application. Run the following commands,

```bash
kubectl apply -f ./frontend/k8.yaml
kubectl apply -f ./backend/k8.yaml
```

Now, we can access the application. Run the following command,

```bash
minikube service buddy-get-fe
```

This could not be enough to run the application with the backend. Ask me for environment varible files. Then, We'll need to port-forward the backend service. Run the following command,

```bash
kubectl port-forward service/buddy-get-be 8080:8080
```

Now, we can access the application. Run the following command,

```bash
minikube service buddy-get-fe
```

And that's it! You can now use the application.
