import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Editor from "../../components/Editor";
import Preview from "../../components/Preview";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ defaultText }) {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Editor defaultText={defaultText}></Editor>
			<Preview defaultText={defaultText}></Preview>
		</>
	);
}