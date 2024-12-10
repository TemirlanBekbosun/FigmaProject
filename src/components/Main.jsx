import React from "react";
import "./Main.css";
import photoshop from "../assets/oldman.svg";

import newB from "../assets/1.svg";
import google from "../assets/2.svg";
import ibm from "../assets/3.svg";

import pentagram from "../assets/4.svg";
import ga from "../assets/5.svg";
import facebook from "../assets/6.svg";
import green from "../assets/green.svg";
import strelka from "../assets/righe.svg";
import Cosmos from "../assets/Cosmos.svg";
import man from "../assets/manphoto.svg";
import left from "../assets/left.svg";
import number from "../assets/Number.svg";
import right from "../assets/Right2.svg";
import faces from "../assets/facesmin.svg";
import cup from "../assets/cup.svg";
import bup from "../assets/bup.svg";
import rize from "../assets/colorize.png";

export default function Main() {
  return (
    <div>
      <section className="mainconteiner">
        <div className="onemainconteiner">
          <div>
            <h1 className="mainconteiner-text"> Make the Impossible</h1>
          </div>
          <div className="textconteiners">
            <div>
              <p className="mainconteiner-twotext">
                Create and edit content like never before.
              </p>
              <p className="mainconteiner-threetext">
                Your next generation creative toolkit — powered by machine
                learning.
              </p>
            </div>
            <div>
              <button className="mainconteiner-button">
                {" "}
                Try Runway for free
              </button>
            </div>
          </div>
        </div>
        <div className="photomainconteiner">
          <img src={photoshop} alt="photo" className="mainconteiner-photo" />
          <button className="mainconteiner-twobutton"> Sign up</button>
        </div>
      </section>

      <section className="secondconteiner">
        <div className="textsecondconteiner">
          <h1>USED BY CREATIVE TEAMS AT:</h1>
        </div>

        <div className="logossecondconteiner">
          <img src={newB} alt="newBphoto" />
          <img src={google} alt="google" />
          <img src={ibm} alt="ibm" />

          <img src={pentagram} alt="pentagram" />
          <img src={ga} alt="ga" />
          <img src={facebook} alt="facebook" />
        </div>
      </section>

      <section className="thirdconteinermain">
        <div className="thirdconteinertexts">
          <div className="thirdtext">
            <h1 className="videot">VIDEO TOOLS</h1>

            <h1 className="newstring">Introducing Green Screen</h1>
          </div>

          <div className="mainerconteiner">
            <div className="justoneclick">
              <div className="ptexts">
                <p className="grate">
                  A professional grade tool for cutting objects out of videos
                  with <span> just one click.</span> All from inside your
                  browser.
                </p>
                <p className="saytext">
                  Say goodbye to clumsy plug-ins and expensive software suites.
                </p>
              </div>
              <button className="trygreen">Try Green Screen</button>
            </div>

            <div className="photothird">
              <img
                className="ultracamera"
                src={green}
                alt="4kultasuperphotocamerayeee"
              />
            </div>
          </div>

          <div className="fouretextconteiner">
            <div className="onefouretextconteiner">
              <p>
                <img src={strelka} alt="photo" /> The first tool for
                professional rotoscoping on the web — and also the fastest.
              </p>
            </div>
            <div className="twofouretextconteiner">
              <p>
                <img src={strelka} alt="photo" />
                Forget downloading plugins for decades-old software.
              </p>
            </div>
            <div className="threefouretextconteiner">
              <p>
                <img src={strelka} alt="photo" />
                Export full resolution 4K videos for any project.
              </p>
            </div>
            <div className="fourefouretextconteiner">
              <p>
                <img src={strelka} alt="photo" />
                Skip the tutorial and get on with your work. It’s not that
                complicated.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="fifthconteiner">
        <div className="textfifthconteiner">
          <h1>Start creating</h1>
        </div>

        <div className="mainlogofifthconteiner">
          <div className="textsfifthconteiner">
            <h1 className="onetextsfifthconteiner">Generate</h1>
            <h1 className="twotextsfifthconteiner">Automate</h1>

            <h1 className="threetextsfifthconteiner">Transform</h1>
            <h1 className="fourtextsfifthconteiner">Analyze</h1>
            <h1 className="fifetextsfifthconteiner">Create</h1>
          </div>

          <div className="photofifthconteiner">
            <img src={Cosmos} alt="Cosmos" />
          </div>
        </div>
      </section>

      <section className="sixthconteiner">
        <div className="textsixthconteiner">
          <h1>SEE WHAT CREATORS ARE SAYING ABOUT RUNWAY</h1>
        </div>

        <div className="mainlogosixthconteiner">
          <div className="textssixthconteiner">
            <h1>
              oh no I found this machine learning drawing tool and now I can’t
              stop (thnx @rDanielLefcourt)
            </h1>
            <div className="onetextsixthconteiner">
              <p>
                Artist, educator. @RISD faculty. Founder @QueerWork, @PrintedWeb
                he/him
              </p>
              <span>@soulellis</span>
            </div>
          </div>

          <div className="photossixthconteiner">
            <div className="photosixthconteiner">
              <img src={man} alt="manphoto" />
            </div>

            <div className="textssixthconteiner">
              <h1>
                Mark my words Runway and tools like it are going to change how
                design studios will work
              </h1>

              <div className="onetextsixthconteiner">
                <p>
                  Director of Experience Technologies @kinandcarta{" "}
                  <span>@Kevmarmol_CT</span>
                </p>
              </div>

              <div className="left-rightcontainer">
                <img src={left} alt="leftphoto" className="leftbutton" />
                <img src={number} alt="numberphoto" />
                <img src={right} alt="rightphoto" className="rightbutton" />
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="seventhconteiner">
        <div className="textseventhconteiner">
          <div className="ferriseventhconteiner">
            <div className="seventhHeader-text">
              <h1>SYNTHETIC MEDIA</h1>
            </div>

            <div className="secondseventhHeader-text">
              <h1>Reimagining how we create</h1>
            </div>
          </div>

          <div>
            <img src={cup} alt="cupphoto" />
          </div>
        </div>

      
        <div className="secondseventhconteiner">
          <div className="imgseventhconteiner">
            <div>
              <img src={faces} alt="facesphoto" />
            </div>
          </div>
          <div className="secondtextconteiner">
            <p>
              Runway uses cutting-edge machine learning to power an entirely new
              way of creating, editing and exporting videos. Explore the
              unlimited creative potential of artificial intelligence.
            </p>
            <button>Start Generating</button>
          </div>
        </div>
      </section>

    
      <section className="eighthconteiner">
        <div className="textseventhconteiner">
          <div className="eighthseventhHeader-text">
            <h1>Automate your workflows</h1>
          </div>

          <div>
            <img src={bup} alt="cupphoto" />
          </div>
        </div>

        <div className="secondeigthconteiner">
          <div className="eigthtextconteiner">
            <p>
              With Runway you can do the things that used to take hours with
              just a few simple clicks. No more frame by frame rotoscoping or
              tedious color grades.
            </p>
            <button>Find a model</button>
          </div>

          <div className="imgeigthconteiner">
            <img src={rize} alt="rizesphoto" />
          </div>
        </div>
      </section>
    </div>
  );
}
