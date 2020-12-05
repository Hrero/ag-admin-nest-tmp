#!/bin/bash
# 参数 1.项目名 2.版本号 3. 端口号 4.操作发布环境
containerName=$1
tag=$2
port=$3
env=${4:-localhost}
currTime=`date +"%Y-%m-%d %H:%M:%S"`
# 查看进程是否存在
exist=`docker inspect --format '{{.State.Running}}' $containerName`
name=`docker inspect --format '{{.Name}}' $containerName`
if [ ${env} == "store" ];then
    docker tag $containerName:$tag 221.12.27.115:5000/$containerName:$tag
    docker push 221.12.27.115:5000/$containerName:$tag
    docker stop $containerName
    echo 上传远程私仓成功
else
    docker build -t $containerName:$tag .
    if [ "${exist}" == "true" ] || [ "${name}" == "/$containerName" ]; then
            docker stop $containerName && docker rm $containerName
            echo $currTime 停止和删除docker容器，容器名称：$containerName
    else
            echo 我去，找不到这个容器
    fi
    pm2 stop $containerName
    docker run --restart unless-stopped -it --name $containerName \
    -p $port:$port \
    -d $containerName:$tag
    echo $currTime 启动容器名称：$containerName
fi


