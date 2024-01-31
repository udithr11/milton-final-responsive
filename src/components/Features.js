import React from "react";
import {
  avatar_logo6,
  calender_logo,
  avatar_logo7,
  features_2,
  features_3,avatar_logo8,avatar_logo9,features_4,
} from "../constants";

const Features = () => {
  return (
    <div className="features_master  mx-auto     bg-red-100">
      <div>
        <div className="flex  justify-center">
          <div className="features_text1 font-bold flex justify-center bg-gray-100 rounded-full p-2 w-52 text-center">
            Our main features 🦸🏼
          </div>
        </div>

        <p className="features_text2 flex justify-center text-center leading-tight">
          Discover your new <br className="mobile_br_1" />
          superpowers
        </p>
      </div>

      {/* 1111111111111 */}
      <div>
        <div className="features_main ">
          <div className="features_small_text_container  items-center justify-start">
            <div className="features_small_text1 font-bold items-center bg-orange-100 rounded-full p-2 w-48 text-center mt-20">
              <p>Seamless Scheduling</p>
            </div>
            <p className="features_small_text2 text-slate-800 mt-2 text-left">
              Focus on what matters <br className="mobile_br_1" /> most for you
            </p>
            <p className="features_small_text3 font-semibold text-left text-gray-500 mt-10">
              Effortlessly plan your day with our <br className="mobile_br_1" />{" "}
              intuitive drag-and-drop interface. <br className="mobile_br_1" />{" "}
              Sync with multiple calendar <br className="mobile_br_1" />{" "}
              platforms, import events from <br className="mobile_br_1" />{" "}
              emails, and add participants with <br className="mobile_br_1" />{" "}
              just a few clicks.
            </p>

            <div className="features_small_text4_container font-bold bg-zinc-800 ml-20 w-64 mt-[50px] text-center p-3 rounded-t-2xl rounded-br-2xl rounded-bl-sm ">
              <p className="text-white text-left">
                I love how user-friendly this
                <br className="mobile_br_1" /> app is! It's so easy to add
                <br className="mobile_br_1" />
                events and set reminders!
              </p>

              <p className="text-gray-500 mt-2 text-left">
                Carla, Head of Finance
              </p>
            </div>

            <img alt="avatarLogo6" src={avatar_logo6} className="h-20 w-20" />
          </div>

          <div className="feature_calender  ">
            <img alt="calenderLogo" src={calender_logo} />
          </div>
        </div>
      </div>

      {/* 22222222 */}
      <div>
        <div className="features_main ">
        <div className="feature_calender_mobile  ">
            <img alt="calenderLogo" src={features_2} />
          </div>
          <div className="features_small_text_container  items-center justify-start">
            <div className="features_small_text1 font-bold items-center bg-blue-100 rounded-full p-2 w-48 text-center mt-20">
              <p> Smart Reminders & Task</p>
            </div>
            <p className="features_small_text2 text-slate-800 mt-2 text-left">
              Never miss an important
              <br className="mobile_br_1" /> deadline or event again
            </p>
            <p className="features_small_text3 font-semibold text-left text-gray-500 mt-10">
              Never miss an important deadline<br className="mobile_br_1" /> again with our AI-driven<br className="mobile_br_1" />
              notifications. Our app intelligently<br className="mobile_br_1" /> analyzes your schedule to
              prioritize<br className="mobile_br_1" /> what's most important, keeping <br className="mobile_br_1" />you on track and
              ensuring your day <br className="mobile_br_1" />is productive and stress-free.
            </p>

            <div className="features_small_text4_container ml-auto font-bold bg-zinc-800 mr-20 w-64 mt-[50px] text-center p-3 rounded-t-2xl rounded-bl-2xl rounded-br-sm ">
              <p className="text-white text-right">
              I tested many calendar apps.<br className="mobile_br_1" /> This app is the best of all! It <br className="mobile_br_1" />saves me hours of time.
              </p>

              <p className="text-gray-500 mt-2 text-right">
              Adam, entrepreneur              </p>
            </div>

            <img alt="avatarLogo6" src={avatar_logo7} className="h-20 w-20 ml-auto" />
          </div>
          <div className="feature_calender_desktop  ">
            <img alt="calenderLogo" src={features_2} />
          </div>
          
        </div>
      </div>


      {/* 3333333 */}
      <div>
        <div className="features_main ">
          <div className="features_small_text_container  items-center justify-start">
            <div className="features_small_text1 font-bold items-center bg-green-100 rounded-full p-2 w-48 text-center mt-20">
              <p>Seamless Scheduling</p>
            </div>
            <p className="features_small_text2 text-slate-800 mt-2 text-left">
              Focus on what matters <br className="mobile_br_1" /> most for you
            </p>
            <p className="features_small_text3 font-semibold text-left text-gray-500 mt-10">
              Effortlessly plan your day with our <br className="mobile_br_1" />{" "}
              intuitive drag-and-drop interface. <br className="mobile_br_1" />{" "}
              Sync with multiple calendar <br className="mobile_br_1" />{" "}
              platforms, import events from <br className="mobile_br_1" />{" "}
              emails, and add participants with <br className="mobile_br_1" />{" "}
              just a few clicks.
            </p>

            <div className="features_small_text4_container font-bold bg-zinc-800 ml-20 w-64 mt-[50px] text-center p-3 rounded-t-2xl rounded-br-2xl rounded-bl-sm ">
              <p className="text-white text-left">
              I've tried a lot of calendar apps, but this one<br className="mobile_br_1" /> is by far the best! It's so intuitive and<br className="mobile_br_1" /> customizable, and it has all the features I need.
                </p>
              <p className="text-gray-500 mt-2 text-left">
                Carla, Head of Finance
              </p>
            </div>

            <img alt="avatarLogo6" src={avatar_logo8} className="h-20 w-20" />
          </div>

          <div className="feature_calender  ">
            <img alt="calenderLogo" src={features_3} />
          </div>
        </div>
      </div>

      {/* 44444 */}
      <div>
        <div className="features_main ">
        <div className="feature_calender_mobile  ">
            <img alt="calenderLogo" src={features_4} />
          </div>
          <div className="features_small_text_container  items-center justify-start">
            <div className="features_small_text1 font-bold items-center bg-yellow-100 rounded-full p-2 w-48 text-center mt-20">
              <p> Smart Reminders & Task</p>
            </div>
            <p className="features_small_text2 text-slate-800 mt-2 text-left">
              Never miss an important
              <br className="mobile_br_1" /> deadline or event again
            </p>
            <p className="features_small_text3 font-semibold text-left text-gray-500 mt-10">
              Never miss an important deadline<br className="mobile_br_1" /> again with our AI-driven<br className="mobile_br_1" />
              notifications. Our app intelligently<br className="mobile_br_1" /> analyzes your schedule to
              prioritize<br className="mobile_br_1" /> what's most important, keeping <br className="mobile_br_1" />you on track and
              ensuring your day <br className="mobile_br_1" />is productive and stress-free.
            </p>

            <div className="features_small_text4_container ml-auto font-bold bg-zinc-800 mr-20 w-64 mt-[50px] text-center p-3 rounded-t-2xl rounded-bl-2xl rounded-br-sm ">
              <p className="text-white text-right">
              I've recommended this app to all my friends <br className="mobile_br_1" /> and colleagues!
              </p>

              <p className="text-gray-500 mt-2 text-right">
              Karl, CTO of a cool startup             </p>
            </div>

            <img alt="avatarLogo6" src={avatar_logo9} className="h-20 w-20 ml-auto" />
          </div>
          <div className="feature_calender_desktop  ">
            <img alt="calenderLogo" src={features_4} />
          </div>
          
        </div>
      </div>

      <div>
        <div className="flex mt-32 justify-center">
          <div className="features_text1 font-bold flex justify-center bg-gray-100 rounded-full p-2 w-52 text-center">
          And so much more... 💼          </div>
        </div>

        <p className="features_text2 flex justify-center text-center leading-tight">
        Our features to make<br className="mobile_br_1" /> your life easier
        </p>
      </div>


    </div>
  );
};

export default Features;
