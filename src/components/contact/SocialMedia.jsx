import React from 'react'
import { images } from "../../images/images.js";
const SocialMedia = () => {
  return (
    <div className="social-media-div ">
    <h1 className="text-lg font-bold">Connect with me</h1>
    <p className="mt-1">
      Feel free to contact me or connect with me. I'm always open to
      working on new ideas.
    </p>
    <ul>
      <li>
        <a
          className="social-media-a"
          href="https://www.linkedin.com/in/ranjana-devi-58976327b"
        >
          {" "}
          <img
            src={images.linkedin}
            className="social-media-icon"
            alt="LinkedIn"
          />
          <p className="mt-2">LinkedIn</p>
        </a>
      </li>
      <li>
        <a
          className="social-media-a"
          href="https://www.youtube.com/@original_panda_coder"
        >
          <img
            src={images.youtube}
            className="social-media-icon"
            alt="YouTube"
          />
          <p className="mt-2">YouTube</p>
        </a>
      </li>
      <li>
        <a
          className="social-media-a"
          href="https://www.instagram.com/_im_ranjana"
        >
          <img
            src={images.insta}
            className="social-media-icon"
            alt="img"
          />
          <p className="mt-2">Instagram</p>
        </a>
      </li>
      <li>
        <a
          className="social-media-a"
          href="https://leetcode.com/u/originalpandacoder/"
        >
          <img
            src={images.lc}
            className="social-media-icon"
            alt="Leetcode"
          />
          <p className="mt-2">Leetcode</p>
        </a>
      </li>
      <li>
        <a
          className="social-media-a"
          href="https://www.geeksforgeeks.org/user/0203ranjw9g9/"
        >
          <img
            src={images.gfg}
            className="social-media-icon"
            alt="Geeks for Geeks"
          />
          <p className="mt-2">GeeksforGeeks</p>
        </a>
      </li>
      <li>
        <a
          className="social-media-a"
          href="https://github.com/officialRanjanaDevi"
        >
          <img
            src={images.git}
            className="social-media-icon"
            alt="GitHub"
          />
          <p className="mt-2">GitHub</p>
        </a>
      </li>
    </ul>
  </div>
  )
}

export default SocialMedia