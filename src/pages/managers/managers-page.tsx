'use client'
import React from 'react'
import ManagersHeading from '@/components/managers/ManagersHeading'
import ManagersGrid from '@/components/managers/ManagersGrid'
import WidthWrapper from '@/components/width-wrapper'


const managers = [
	{
		name: "Divya Patel",
		reg: "(INH000013059)",
		role: "Research Analyst",
		img: "./icons/about-page/avtar.png",
	},
	{
		name: "John Doe",
		reg: "(INH000013060)",
		role: "Project Manager",
		img: "./icons/about-page/avtar.png",
	},
	{
		name: "Jane Smith",
		reg: "(INH000013061)",
		role: "Team Lead",
		img: "./icons/about-page/avtar.png",
	},
	{
		name: "Emily Johnson",
		reg: "(INH000013062)",
		role: "Software Engineer",
		img: "./icons/about-page/avtar.png",
	},
	{
		name: "Michael Brown",
		reg: "(INH000013063)",
		role: "Data Scientist",
		img: "./icons/about-page/avtar.png",
	},
	{
		name: "Sarah Davis",
		reg: "(INH000013064)",
		role: "UX Designer",
		img: "./icons/about-page/avtar.png",
	},
	{
		name: "David Wilson",
		reg: "(INH000013065)",
		role: "DevOps Engineer",
		img: "./icons/about-page/avtar.png",
	},
	{
		name: "Laura Miller",
		reg: "(INH000013066)",
		role: "Product Owner",
		img: "./icons/about-page/avtar.png",
	},
]
 
const ManagersPage = () => (
	<WidthWrapper>
	<div className="flex flex-col items-center">
		<ManagersHeading />
		<ManagersGrid managers={managers} />
		<div className="mt-16" />
	</div>
	</WidthWrapper>
)

export default ManagersPage
