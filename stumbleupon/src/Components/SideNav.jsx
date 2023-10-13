import React from 'react';

const sideNav = (banList) => {
    const inputsInfo = [
        "Input a link to any website you would like to take a screenshot of. Do not include https or any protocol in the URL",
        "Input which image format you would prefer for your screenshot: jpeg, png, or webp",
        "Input true or false if you would like your website screenshot to not contain any ads",
        "Input true or false if you would like your website screenshot to not contain of those annoying 'allow cookies' banners",
        "Choose the width of your screenshot (in pixels)",
        "Choose the height of your screenshot (in pixels)",
    ];

    return (
        <>
            <div className='sideNav'>
                <h2>Ban List</h2>
                <h4>Select an attribute in your listing to ban it.</h4>
                {banList && banList.length > 0 ? (
                banList.map((item, index) => (
                <button type = "banned item"
                    className="banned-button" key={index}>
                        {item}
                </button>
                ))
            ) : (
                <div>
                </div>
            )}
            </div>
        </>
    )
}

export default sideNav;