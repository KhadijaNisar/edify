import React from "react";
import Link from "next/link";

const Plans = () => {
  return (
    <>
      <div className="Plans_parent_div_main maxPad">
        <div className="plans_grid_div">
          <div className="plams_div_col_1">
            <div className="textbox_plans">
              <span>Save More</span>
              <h3>With Goodplans.</h3>
              <p>
                Choose a plan and getunboard minutes.Then get $100 credits for
                your next payment
              </p>
              <button>Choose Plan</button>
            </div>

            <img
              src="/images/price-shape.png"
              className="price_div_png_image"
              alt=""
            />
            <img
              src="/images/price-thumb.png"
              className="price_lower_image"
              alt=""
            />
          </div>

          <div className="plams_div_col_2">
            <div className="col_2_textbox">
              <h3>Educal Online Training from Experts</h3>
              <p>
                Learn from anywhere in the world on desktop mobile Phone with an
                Internet connection.
              </p>
            </div>

            <div className="plans_col_2_parent_div">
              <div className="plans_col_2_sub_one">
                <img src="/images/untitled.png" alt="" />
              </div>

              <div className="plans_col_2_content_div">
                <h4>Educal Online Training from Experts</h4>
                <p>
                  Learn from anywhere in the world on desktop mobile Phone with
                  an Internet connection.
                </p>
                <div className="plans_div_readmore_link">
                  <Link href={"/"}>Read more</Link>
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>

            <div className="plans_col_2_parent_div">
              <div className="plans_col_2_sub_one">
                <img src="/images/untitled.png" alt="" />
              </div>

              <div className="plans_col_2_content_div">
                <h4>Educal Online Training from Experts</h4>
                <p>
                  Learn from anywhere in the world on desktop mobile Phone with
                  an Internet connection.
                </p>
                <div className="plans_div_readmore_link">
                  <Link href={"/"}>Read more</Link>
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
