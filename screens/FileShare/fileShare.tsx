import { View, Text } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { Socket } from "socket.io-client";

type FileShareProps = {
	socket: Socket;
	roomId?: string;
};

type MetaData = {
	fileName: string;
	fileType: string;
	fileSize: number;
	roomId?: string;
};

const FileShare = ({ socket, roomId }: FileShareProps) => {
	const [files, setFiles] = useState<File[]>([]);
	const [progress, setProgress] = useState<number>();

	useEffect(() => {}, []);
	const onDrop = useCallback((acceptedFiles: File[]) => {
		setFiles((list) => [...list, ...acceptedFiles]);
		acceptedFiles.forEach(async (file: File) => {
			const data = await file.arrayBuffer();

			const metaData: MetaData = {
				fileName: file.name,
				fileType: file.type,
				fileSize: file.size,
				roomId: roomId,
			};
			console.log(data);
			socket.emit("file-ready", data, metaData);
		});
		console.log(acceptedFiles[0]);
	}, []);

    function handleFiles(acceptedFiles: File[]) {
        acceptedFiles.forEach(async (file: File) => {
          const bufferPromise = await file.arrayBuffer();
          // promise.then((data) => {
          //   console.log(data)
          // }).catch((reason) => console.log(reason))
        })
      }

	return (
		<View>
			<Text>Drop files</Text>
		</View>
	);
};

export default FileShare;
