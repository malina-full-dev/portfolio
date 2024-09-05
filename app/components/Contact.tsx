export const Contact = () => {
    return (
        <div id='contact' className='min-h-full mt-10 sm:mt-16 lg:mt-20 max-w-2xl sm:max-w-4xl pt-2 mx-auto mb-20'>
            <h2 className="mb-10 text-2xl font-bold leading-8 text-transparent bg-clip-text bg-gradient-to-b from-primary to-sky-500 drop-shadow-xl text-center">
                Reach out to me
            </h2>
            <div className="mockup-window bg-base-50 border-b border-base-800  border mx-3">
                <div className="mockup-toolbar bg-base-50 border-b border-base-800 "></div>
                <div className="my-3">
                <div className="chat chat-start mx-3 ">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS chat bubble component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        
                        <div className="chat-header">
                            You
                            <time className="text-xs opacity-50"> 12:45</time>
                        </div>
                        <div className="chat-bubble bg-gray-300 border drop-shadow-md text-black">Hey You </div>
                </div>
                <div className="chat chat-start mx-3 ">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS chat bubble component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="chat-bubble bg-gray-300 border drop-shadow-md text-black">How can i reach out to you ?</div>
                        <div className="chat-footer opacity-50">Delivered</div>
                </div>
                    <div className="chat chat-end mx-3 ">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img 
                                    src={'/images/avatar.jpg'} 
                                    alt={'logo'}
                                    className='object-cover rounded-full' 
                                    width={40}
                                    height={40}
                                />
                            </div>
                        </div>
                        <div className="chat-header">
                            Slim Bouras  
                            <time className="text-xs opacity-50"> 12:46</time>
                        </div>
                        <div className="chat-bubble   text-white bg-primary border drop-shadow-md">
                            <p>Hello, you can Email me at <a className="font-extrabold text-white" href="mailto:">"@"</a><br />
                                or Message me on <a className="font-extrabold text-white" href="">LinkedIn</a><br /></p>
                        </div>
                    </div>
                    <div className="chat chat-end mx-3 mt-1">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                            <img 
                                    src={'/images/avatar.jpg'} 
                                    alt={'logo'}
                                    className='object-cover rounded-full' 
                                    width={40}
                                    height={40}
                                />
                            </div>
                        </div>
                        <div className="chat-bubble  text-white bg-primary border drop-shadow-md">See you there 😀! </div>
                        <div className="chat-footer opacity-50">Seen at 12:46</div>
                    </div>
                </div>
                </div>
            </div>

    );
};
