import React, { useState, useEffect } from 'react';
import Sidenav from './components/sidenav';

const Dashboard = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUserData(JSON.parse(storedUser));
        }
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <main className="flex flex-col md:flex-row h-full">
                {/* SideNav for larger screens */}
                <Sidenav />

                <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 md:px-8 text-center ml-[20%]">
                    <div className="max-w-xl mx-auto">
                        <h2 className="text-gray-800 text-3xl md:text-4xl font-extrabold">
                            Welcome, {userData.firstName} {userData.surname}!
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
                            Taking care of your health is important, and we’re here to help you feel your best! Our wellness tips section is full of helpful advice to keep you feeling strong, relaxed, and positive during your time at the hospital and beyond. Whether it's simple ways to manage stress, tips for staying healthy, or strategies for feeling more at ease, we’ve got you covered. Browse through fun, easy-to-understand suggestions that will help you take care of both your body and mind while you’re here. Remember, feeling good starts with small steps, and we’re with you every step of the way!
                        </p>

                        {/* Accordion Section */}
                        <div className='flex items-center justify-center min-h-screen'>
                            <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl'>
                                <h1 className="text-xl mb-10 text-center">Wellness Tips</h1>
                                {/* THE ACCORDION WITH <details> <summary> HTML Tag */}
                                <details className="w-full bg-white border border-[#33CCCC] cursor-pointer mb-3">
                                    <summary className="w-full bg-white text-dark flex justify-between px-4 py-3 after:content-['+']">
                                        Fun ways to relaax
                                    </summary>
                                    <p className="px-4 py-3">
                                        It’s normal to feel a bit anxious or restless during your time at the hospital, but there are lots of fun and easy ways to help you relax and feel better. Here are some ideas to make your time a little more enjoyable:
                                        <br></br>
                                        <strong>1.</strong>Listen to Relaxing Music – Whether it's soft melodies or your favorite tunes, music can help calm your nerves and create a peaceful atmosphere.
                                        <br></br>
                                        <strong>2.</strong>Try Simple Breathing Exercises – Take a moment to sit back, close your eyes, and focus on your breathing. Deep breaths can help you feel more relaxed and centered.

                                        <br></br>
                                        <strong>3.</strong>Get Creative with Drawing or Coloring – Grab some paper and markers, and start drawing or coloring! It’s a fun way to express yourself and take your mind off things.

                                        <br></br>
                                        <strong>4.</strong>Read a Fun Book or Comic – Escape into a new world with a good book or comic. Reading is a great way to relax while learning something new or just having fun.

                                        <br></br>
                                        <strong>5.</strong>Watch a Movie or Show – Sit back and enjoy a movie or TV show. Pick something lighthearted or funny to help brighten your mood during your hospital stay.

                                        <br></br>
                                        <strong>6.</strong>Play a Game – Whether it's on a tablet or a game you play with family, playing games can be a great way to have fun and pass the time.

                                        <br></br>
                                        <strong>7.</strong>Take a Walk Around the Hospital – If you’re able to, take a short walk around the hospital grounds. Fresh air and a change of scenery can help you feel a little better.
                                        <br></br>
                                        Remember, it’s important to take breaks and relax when you can. You’re not alone—we’re here to support you every step of the way!
                                    </p>
                                </details>

                                <details className="w-full bg-white border border-[#33CCCC] cursor-pointer mb-3">
                                    <summary className="w-full bg-white text-dark flex justify-between px-4 py-3 after:content-['+']">
                                        Healthy habits
                                    </summary>
                                    <p className="px-4 py-3">
                                        Staying healthy during your time at the hospital is important, and there are simple habits you can practice to feel better each day. Here are some easy, healthy habits to try:

                                        <br></br>
                                        <strong>1.</strong>Drink Plenty of Water – Staying hydrated is essential for your body to function well. Make sure to drink water throughout the day to keep your energy up and help your body recover.

                                        <br></br>
                                        <strong>2.</strong>Eat Nutritious Foods – Eating a balanced diet helps your body heal and feel strong. Include fruits, vegetables, and protein in your meals, and remember to enjoy your food in a calm and peaceful setting.

                                        <br></br>
                                        <strong>3.</strong>Move Your Body – If you're able to, light movement, like stretching or walking around, can improve your mood and help your body feel better. Even small movements can help!

                                        <br></br>
                                        <strong>4.</strong>Get Enough Rest – Your body needs time to recover, and rest is key to feeling better. Make sure you get plenty of sleep and take breaks when you need to.

                                        <br></br>
                                        <strong>5.</strong>Practice Good Hygiene – Washing your hands regularly and brushing your teeth helps keep you feeling fresh and healthy. Clean habits make a big difference in staying well during your hospital visit.

                                        <br></br>
                                        <strong>6.</strong>Stay Positive – A positive attitude can help you stay strong through your hospital journey. Try to focus on things that make you happy, and talk to someone if you're feeling down.

                                        <br></br>
                                        <strong>7.</strong>Follow Your Doctor's Advice – Listen to your healthcare team and follow their instructions. They’re here to help you feel better and guide you through your recovery.
                                        <br></br>
                                        Remember, staying healthy is all about taking small steps each day. You’re doing great, and we're here to help you along the way!
                                    </p>
                                </details>

                                <details className="w-full bg-white border border-[#33CCCC] cursor-pointer mb-3">
                                    <summary className="w-full bg-white text-dark flex justify-between px-4 py-3 after:content-['+']">
                                        Feel-good tips
                                    </summary>
                                    <p className="px-4 py-3">
                                        It’s important to take care of yourself both physically and emotionally during your hospital stay. Here are some feel-good tips that can help brighten your day and make you feel more comfortable:

                                        <br></br>
                                        <strong>1.</strong>Take Deep Breaths – Deep breathing can help calm your mind and reduce stress. Try taking a few slow, deep breaths whenever you feel tense or worried. It’s a simple way to relax and feel better.

                                        <br></br>
                                        <strong>2.</strong>Listen to Your Favorite Music – Music can be a great way to lift your spirits. Whether it’s calming tunes or your favorite upbeat songs, listening to music can help you feel relaxed and happy.

                                        <br></br>
                                        <strong>3.</strong>Talk to Someone You Trust – Sometimes, just talking to a friend, family member, or even a nurse can help you feel better. Share how you’re feeling or ask for help if you need it. You’re never alone here.

                                        <br></br>
                                        <strong>4.</strong>Enjoy a Fun Activity – Whether it’s drawing, reading, playing a game, or watching a movie, doing something fun can take your mind off the hospital and make you feel more at ease.

                                        <br></br>
                                        <strong>5.</strong>Focus on What You Can Do – If you’re feeling stuck, try focusing on something small you can control, like setting a goal for the day or thinking of something positive. Small wins help you feel accomplished and in charge.

                                        <br></br>
                                        <strong>6.</strong>Take a Moment to Relax – Resting and taking small breaks are just as important as staying busy. Find a quiet space, close your eyes, and relax for a few minutes. It helps your body recharge.

                                        <br></br>
                                        <strong>7.</strong>Find Something to Smile About – Even on tough days, there’s always something that can make you smile. Whether it’s a funny joke, a cute video, or a kind gesture from someone, find those moments that bring joy into your day.
                                        <br></br>
                                        Remember, it’s okay to have ups and downs. These little feel-good tips can help you stay positive and make your hospital visit a little brighter.
                                    </p>
                                </details>
                                {/* END Accordion */}

                                <style>
                                    {`
                                        details summary::-webkit-details-marker {
                                            display: none;
                                        }

                                        details[open] summary {
                                            background: #33CCCC;
                                            color: white;
                                        }

                                        details[open] summary::after {
                                            content: "-";
                                        }

                                        details[open] summary ~ * {
                                            animation: slideDown 0.3s ease-in-out;
                                        }

                                        details[open] summary p {
                                            opacity: 0;
                                            animation-name: showContent;
                                            animation-duration: 0.6s;
                                            animation-delay: 0.2s;
                                            animation-fill-mode: forwards;
                                            margin: 0;
                                        }

                                        @keyframes showContent {
                                            from {
                                                opacity: 0;
                                                height: 0;
                                            }
                                            to {
                                                opacity: 1;
                                                height: auto;
                                            }
                                        }
                                        @keyframes slideDown {
                                            from {
                                                opacity: 0;
                                                height: 0;
                                                padding: 0;
                                            }
                                            to {
                                                opacity: 1;
                                                height: auto;
                                            }
                                        }
                                    `}
                                </style>

                            </div>
                        </div>

                        <a href='#'>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/self-love.gif`}
                                alt='Hospital'
                                className="w-full md:w-80 my-8 mx-auto block"
                            />
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Dashboard;
