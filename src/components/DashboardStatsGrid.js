import React from 'react'
import { HiTrendingUp } from 'react-icons/hi'

export default function DashboardStatsGrid() {
    return (
        <div className="flex gap-4 w-full">
            <BoxWrapper>
                <div className="flex flex-wrap">
                    <div className="flex items-center justify-center rounded-full bg-neutral-100 w-12 h-12">
                        <HiTrendingUp className="text-2xl text-primary-600" />
                    </div>
                    <div className="mt-4 m-2">
                        <span className="text-sm font-semibold">Trending Up</span>
                        <div className="flex items-center space-x-1">
                            <strong className="">+ 28%</strong>
                            <span className="text-neutral-400">Up</span>
                        </div>
                    </div>
                </div>
            </BoxWrapper>

            <BoxWrapper>
                <div className="flex flex-wrap">
                    <div className="flex items-center justify-center rounded-full bg-neutral-100 w-12 h-12">
                        <HiTrendingUp className="text-2xl text-primary-600" />
                    </div>
                    <div className="mt-4 m-2">
                        <span className="text-sm font-semibold">Trending Up</span>
                        <div className="flex items-center space-x-1">
                            <strong className="">+ 28%</strong>
                            <span className="text-neutral-400">Up</span>
                        </div>
                    </div>
                </div>
            </BoxWrapper>

            <BoxWrapper>
                <div className="flex flex-wrap">
                    <div className="flex items-center justify-center rounded-full bg-neutral-100 w-12 h-12">
                        <HiTrendingUp className="text-2xl text-primary-600" />
                    </div>
                    <div className="mt-4 m-2">
                        <span className="text-sm font-semibold">Trending Up</span>
                        <div className="flex items-center space-x-1">
                            <strong className="">+ 28%</strong>
                            <span className="text-neutral-400">Up</span>
                        </div>
                    </div>
                </div>
            </BoxWrapper>

            <BoxWrapper>
                <div className="flex flex-wrap">
                    <div className="flex items-center justify-center rounded-full bg-neutral-100 w-12 h-12">
                        <HiTrendingUp className="text-2xl text-primary-600" />
                    </div>
                    <div className="mt-4 m-2">
                        <span className="text-sm font-semibold">Trending Up</span>
                        <div className="flex items-center space-x-1">
                            <strong className="">+ 28%</strong>
                            <span className="text-neutral-400">Up</span>
                        </div>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    )
}

function BoxWrapper({ children }) {
    return (
        <div className="flex-1 bg-white rounded-sm shadow-md p-4">
            {children}
        </div>
    )
}