/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { Button } from '@/components/ui/button';
import StackIcon from "tech-stack-icons";


export const Hero = () => {
    return (
        <div id='about' className="min-h-full mt-10 sm:mt-16 lg:mt-20 max-w-4xl mx-auto px-4 flex flex-col items-center justify-center">
            <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-0">
                    {/* Image container */}
                    <div className="lg:pl-20 flex justify-center lg:justify-start">
                        <div className="relative w-40 sm:w-48 md:w-64 lg:w-auto px-2.5 lg:max-w-none">
                            <div className="p-1 aspect-square rotate-3 rounded-2xl border border-zinc-400/5 bg-zinc-50 dark:shadow-md dark:shadow-zinc-800/5 dark:bg-zinc-800 dark:border-zinc-700/50">
                                <div className="pointer-events-none md:max-w-2xl">
                                    {/* Gradient and animation layers */}
                                    <div className="absolute -right-14 -top-10 h-px w-[400%] bg-gradient-to-l from-slate-400 opacity-20"></div>
                                    <div
                                        className="absolute top-[-135%] bottom-[-65%] -right-12 w-px opacity-20"
                                        style={{
                                            backgroundImage:
                                                'linear-gradient(to bottom, rgba(148, 163, 184, 0) 30%, rgb(148, 163, 184), rgba(148, 163, 184, 0))',
                                        }}
                                    ></div>
                                    <div
                                        className="absolute -right-28 -bottom-10 h-px w-[400%] opacity-30"
                                        style={{
                                            backgroundImage:
                                                'linear-gradient(to right, rgba(119, 185, 250, 0) 60%, rgb(119, 185, 250) 77%, rgba(119, 185, 250, 0) 94%)',
                                        }}
                                    ></div>
                                    <div
                                        className="absolute top-[-120%] bottom-[-80%] -left-12 w-px opacity-20"
                                        style={{
                                            backgroundImage:
                                                'linear-gradient(to bottom, rgba(148, 163, 184, 0) 30%, rgb(148, 163, 184), rgba(148, 163, 184, 0))',
                                        }}
                                    ></div>
                                    <div className="absolute -top-10 right-1 mt-[-0.5px] h-[2px] w-28 rounded-full bg-gradient-to-r from-blue-500 animate-move"></div>
                                    <div className="absolute -left-12 bottom-50 ml-[-0.5px] h-28 w-[2px] rounded-full bg-gradient-to-t from-violet-400 animate-move-down"></div>
                                </div>
                                <Image
                                    src="/images/profile.jpg"
                                    alt={'Profile picture '}
                                    className="relative object-cover rounded-2xl bg-zinc-50 dark:bg-zinc-800"
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text content */}
                    <div className="relative flex flex-col items-center text-center lg:order-first lg:row-span-2 lg:text-left lg:items-start">
                        <div className="z-10">
                            <h1 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight lg:text-5xl lg:leading-none">
                                Hi i am{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-500">
                                    Your Namee
                                </span>
                                , A Fullstack Developer
                            </h1>
                            <div className="mt-6 space-y-5 leading-[1.65rem] font-medium text-md text-zinc-900">
                                <p>
                                    I'm on a continuous Journey to enhance my skills and keep up wie latest trends in web development. Currently, I'm diving into
                                    <span className=' ml-0.5 inline-flex items-center gap-1.5 rounded-md bg-zinc-50 px-1.5 py-1 text-sm leading-4 text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-white dark:ring-zinc-700'> <svg width={20} height={20} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.5 4.5L4.90534 4.20725C4.77836 4.03144 4.55252 3.95753 4.34617 4.02425C4.13981 4.09098 4 4.28313 4 4.5H4.5ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C0 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM7.5 1C11.0899 1 14 3.91015 14 7.5H15C15 3.35786 11.6421 0 7.5 0V1ZM7.5 0C3.35786 0 0 3.35786 0 7.5H1C1 3.91015 3.91015 1 7.5 1V0ZM5 12V4.5H4V12H5ZM4.09466 4.79275L10.5947 13.7927L11.4053 13.2073L4.90534 4.20725L4.09466 4.79275ZM10 4V10H11V4H10Z" fill="#000000" />
                                    </svg> Next.js</span> to build fast and dynamic applications. h is why I spend my free time exploring
                                    <span className='ml-0.5 inline-flex items-center gap-1.5 rounded-md bg-zinc-50 px-1.5 py-1 text-sm leading-4 text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-white dark:ring-zinc-700'> <svg width={20} height={20} viewBox="-0.89 0 80.79 80.79" xmlns="http://www.w3.org/2000/svg" fill="#000000">

                                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                        <g id="SVGRepo_iconCarrier"> <g id="Game_developement" data-name="Game developement" transform="translate(-240.337 -389.352)"> <g id="Group_34" data-name="Group 34"> <g id="Group_33" data-name="Group 33">
                                            <g id="Group_32" data-name="Group 32">
                                                <g id="Group_31" data-name="Group 31">
                                                    <path id="Path_73" data-name="Path 73" d="M319.03,454.132a13.11,13.11,0,1,1-25.58,5.76l-.989-4.48h-5.77a3.01,3.01,0,0,1-2.891-2.181l-1.16-4.089h-5.28l-1.16,4.089a3.01,3.01,0,0,1-2.89,2.181h-6.079l-.991,4.47a13.111,13.111,0,1,1-25.58-5.771s3.93-17.09,5.35-22.759a18.716,18.716,0,0,1,7.14-10.47,3.125,3.125,0,0,1-.12-.821V413.3a3,3,0,0,1,2.14-2.87l5.46-1.641c.07-.159.13-.319.2-.48l-2.7-5.02a2.986,2.986,0,0,1,.52-3.539l4.78-4.78a2.982,2.982,0,0,1,3.54-.52l5.02,2.7c.16-.07.32-.13.48-.2l1.64-5.46a3,3,0,0,1,2.871-2.14h6.759a3,3,0,0,1,2.88,2.14l1.64,5.46c.16.069.31.129.471.2l5.029-2.7a2.982,2.982,0,0,1,3.54.52l4.78,4.78a3,3,0,0,1,.52,3.55l-2.7,5.019c.07.151.13.311.2.47l5.46,1.641a3,3,0,0,1,2.14,2.87v6.759a3.045,3.045,0,0,1-.28,1.25,19.177,19.177,0,0,1,6.87,11.241Zm-11.23,9.83a7.137,7.137,0,0,0,5.37-8.53l-1.84-8.371a19.041,19.041,0,0,1-12.78,8.09l.76,3.441a7.1,7.1,0,0,0,8.49,5.37Zm.86-27.671a13.108,13.108,0,0,0-13.05-13.129H264.39a13.125,13.125,0,0,0,0,26.25h6.66l1.161-4.091a3,3,0,0,1,2.879-2.179h9.81a3,3,0,0,1,2.89,2.179l1.16,4.091h6.66A13.107,13.107,0,0,0,308.66,436.291Zm-6.96-18.46v-2.29l-4.78-1.439a2.987,2.987,0,0,1-2-1.98,14.838,14.838,0,0,0-1.04-2.5,2.978,2.978,0,0,1,.02-2.811l2.36-4.389-1.62-1.631-4.4,2.36a2.993,2.993,0,0,1-2.82.021,14.185,14.185,0,0,0-2.5-1.04,3.026,3.026,0,0,1-1.979-2l-1.431-4.78h-2.29l-1.44,4.77a2.986,2.986,0,0,1-1.97,2.01,14,14,0,0,0-2.51,1.04,2.992,2.992,0,0,1-2.819-.021l-4.391-2.36-1.62,1.621,2.36,4.39a3,3,0,0,1,.02,2.82,14.277,14.277,0,0,0-1.04,2.51,2.988,2.988,0,0,1-2.01,1.97l-4.77,1.439v2.29l.21.061a19.07,19.07,0,0,1,5.15-.73h5.16c-.01-.16-.02-.31-.02-.48a10.835,10.835,0,0,1,21.67,0c0,.17-.02.32-.02.48h4.43a18.862,18.862,0,0,1,5.54.84Zm-16.55-.669c.01-.16.05-.31.05-.48a4.835,4.835,0,0,0-9.67,0,3.714,3.714,0,0,0,.05.48Zm-24.77,41.419.77-3.47a19.113,19.113,0,0,1-12.72-8.409l-1.909,8.71a7.139,7.139,0,0,0,5.369,8.55,7.109,7.109,0,0,0,8.49-5.381Z" fill="#104386" />
                                                    <path id="Path_74" data-name="Path 74" d="M313.17,455.432a7.137,7.137,0,0,1-5.37,8.53,7.1,7.1,0,0,1-8.49-5.37l-.76-3.441a19.041,19.041,0,0,0,12.78-8.09Z" fill="#69f" /> <path id="Path_75" data-name="Path 75" d="M303.15,433.021a3,3,0,1,1-4.24,0A3.1,3.1,0,0,1,303.15,433.021Z" fill="#104386" /> <path id="Path_76" data-name="Path 76" d="M301.7,415.541v2.29l-.55.171a18.862,18.862,0,0,0-5.54-.84h-4.43c0-.16.02-.31.02-.48a10.835,10.835,0,0,0-21.67,0c0,.17.01.32.02.48h-5.16a19.07,19.07,0,0,0-5.15.73l-.21-.061v-2.29l4.77-1.439a2.988,2.988,0,0,0,2.01-1.97,14.277,14.277,0,0,1,1.04-2.51,3,3,0,0,0-.02-2.82l-2.36-4.39,1.62-1.621,4.391,2.36a2.992,2.992,0,0,0,2.819.021,14,14,0,0,1,2.51-1.04,2.986,2.986,0,0,0,1.97-2.01l1.44-4.77h2.29l1.431,4.78a3.026,3.026,0,0,0,1.979,2,14.185,14.185,0,0,1,2.5,1.04,2.993,2.993,0,0,0,2.82-.021l4.4-2.36,1.62,1.631-2.36,4.389a2.978,2.978,0,0,0-.02,2.811,14.838,14.838,0,0,1,1.04,2.5,2.987,2.987,0,0,0,2,1.98Z" fill="#ffffff" /> <path id="Path_77" data-name="Path 77" d="M299.03,430.142a3,3,0,1,1-5.12-2.121,3.1,3.1,0,0,1,4.24,0A3.013,3.013,0,0,1,299.03,430.142Z" fill="#104386" /> <path id="Path_78" data-name="Path 78" d="M298.15,438.021a3,3,0,1,1-4.24,0A3.1,3.1,0,0,1,298.15,438.021Z" fill="#104386" /> <path id="Path_79" data-name="Path 79" d="M294.03,435.142a3,3,0,1,1-5.12-2.121,3.1,3.1,0,0,1,4.24,0A3.013,3.013,0,0,1,294.03,435.142Z" fill="#104386" /> <path id="Path_80" data-name="Path 80" d="M269.03,432.142a3,3,0,0,1,0,6h-2a3,3,0,0,1,0-6Z" fill="#104386" /> <path id="Path_81" data-name="Path 81" d="M265.53,440.142v2a3,3,0,0,1-6,0v-2a3,3,0,0,1,6,0Z" fill="#104386" /> <path id="Path_82" data-name="Path 82" d="M265.53,428.142v2a3,3,0,0,1-6,0v-2a3,3,0,0,1,6,0Z" fill="#104386" /> <path id="Path_83" data-name="Path 83" d="M261.15,455.111l-.77,3.47a7.109,7.109,0,0,1-8.49,5.381,7.139,7.139,0,0,1-5.369-8.55l1.909-8.71A19.113,19.113,0,0,0,261.15,455.111Z" fill="#69f" /> <path id="Path_84" data-name="Path 84" d="M261.03,435.142a3,3,0,0,1-3,3h-2a3,3,0,1,1,0-6h2A3,3,0,0,1,261.03,435.142Z" fill="#104386" /> <path id="Path_85" data-name="Path 85" d="M264.39,423.162h31.22a13.125,13.125,0,0,1,0,26.25h-6.66l-1.16-4.091a3,3,0,0,0-2.89-2.179h-9.81a3,3,0,0,0-2.879,2.179l-1.161,4.091h-6.66a13.125,13.125,0,0,1,0-26.25Zm-3.36,11.98a3,3,0,0,0-3-3h-2a3,3,0,1,0,0,6h2A3,3,0,0,0,261.03,435.142Zm4.5,5a3,3,0,0,0-6,0v2a3,3,0,0,0,6,0Zm-3-7a3,3,0,0,0,3-3v-2a3,3,0,0,0-6,0v2A3,3,0,0,0,262.53,433.142Zm4.5-1a3,3,0,0,0,0,6h2a3,3,0,0,0,0-6Zm29,1a3,3,0,0,0,2.12-5.121,3.1,3.1,0,0,0-4.24,0,3,3,0,0,0,2.12,5.121Zm-2.88-.121a3.1,3.1,0,0,0-4.24,0,3,3,0,1,0,4.24,0Zm5.76,4.241a3,3,0,1,0,4.24-4.241,3.1,3.1,0,0,0-4.24,0,2.995,2.995,0,0,0,0,4.241Zm-.76.759a3.1,3.1,0,0,0-4.24,0,3,3,0,1,0,4.24,0Z" fill="#ffffff" /> </g> </g> </g> </g> </g> </g>

                                    </svg>game design</span> and practicing <span className='ml-0.5 inline-flex items-center gap-1.5 rounded-md bg-zinc-50 px-1.5 py-1 text-sm leading-4 text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-white dark:ring-zinc-700'>
                                        <img src="/images/pottery.svg" alt="" width={20} />
                                        pottery</span>. This unique combination of coding and creativity allows me tes and innovative solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Stack Section */}
                <div className="mt-10 max-w-4xl text-center lg:text-left">
                    <h2 className="text-2xl font-bold leading-8 text-transparent bg-clip-text bg-gradient-to-r from-black to-sky-500 drop-shadow-xl">
                        I love working with
                    </h2>
                    <div className="mt-5 grid grid-cols-4 gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:grid-cols-8 items-center justify-center">
                        <StackIcon name="reactjs" className='ml-5 w-12 transition-all duration-300 hover:-translate-y-2 hover:translate-x-1' />
                        <StackIcon name="nextjs" className='w-12 transition-all duration-300 hover:-translate-y-2 hover:translate-x-1' />
                        <StackIcon name="nodejs" className='w-12 transition-all duration-300 hover:-translate-y-2 hover:translate-x-1' />
                        <StackIcon name="tailwindcss" className='w-12 transition-all duration-300 hover:-translate-y-2 hover:translate-x-1' />
                        <StackIcon name="mongodb" className='w-12 transition-all duration-300 hover:-translate-y-2 hover:translate-x-1' />
                        <StackIcon name="mysql" className='w-12 transition-all duration-300 hover:-translate-y-2 hover:translate-x-1' />
                        <StackIcon name="docker" className='w-12 transition-all duration-300 hover:-translate-y-2 hover:translate-x-1' />
                        <StackIcon name="git" className='w-12 transition-all duration-300 hover:-translate-y-2 hover:translate-x-1' />
                    </div>
                </div>
            </div>
        </div>
    );
};

