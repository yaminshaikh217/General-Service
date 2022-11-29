import { useEffect } from "react";

const Comingsoon = ({ show, handleComingClick }) => {
  useEffect(() => {
    show
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "scroll");
    // documtestentListener('click', () => {
    //   handleComingClick()
    // })
    if (show) {
      var setShowInterval = setTimeout(() => {
        handleComingClick();
      }, 4000);
    }
    return () => {
      clearInterval(setShowInterval);
    };
  }, [show]);

  return (
    <section className={`comingsoon ${show ? "" : "d-none"}`}>
      <i onClick={() => handleComingClick()} className="fa-solid fa-xmark"></i>
      <svg viewBox="0 0 597 66" id="comingSVG">
        <mask id="path-1-outside-1_4_4" fill="black">
          <rect fill="white" width="597" height="66" />
          <path
            className="p1"
            d="M4.44 33.08C4.44 27.64 5.66667 22.76 8.12 18.44C10.5733 14.0667 13.9067 10.6533 18.12 8.19999C22.3867 5.74666 27.1067 4.51999 32.28 4.51999C38.36 4.51999 43.6667 5.98666 48.2 8.91999C52.7333 11.8533 56.04 16.0133 58.12 21.4H49.4C47.8533 18.04 45.6133 15.4533 42.68 13.64C39.8 11.8267 36.3333 10.92 32.28 10.92C28.3867 10.92 24.8933 11.8267 21.8 13.64C18.7067 15.4533 16.28 18.04 14.52 21.4C12.76 24.7067 11.88 28.6 11.88 33.08C11.88 37.5067 12.76 41.4 14.52 44.76C16.28 48.0667 18.7067 50.6267 21.8 52.44C24.8933 54.2533 28.3867 55.16 32.28 55.16C36.3333 55.16 39.8 54.28 42.68 52.52C45.6133 50.7067 47.8533 48.12 49.4 44.76H58.12C56.04 50.0933 52.7333 54.2267 48.2 57.16C43.6667 60.04 38.36 61.48 32.28 61.48C27.1067 61.48 22.3867 60.28 18.12 57.88C13.9067 55.4267 10.5733 52.04 8.12 47.72C5.66667 43.4 4.44 38.52 4.44 33.08Z"
          />
          <path
            className="p2"
            d="M95.8369 61.56C90.6635 61.56 85.9435 60.36 81.6769 57.96C77.4102 55.5067 74.0235 52.12 71.5169 47.8C69.0635 43.4267 67.8369 38.52 67.8369 33.08C67.8369 27.64 69.0635 22.76 71.5169 18.44C74.0235 14.0667 77.4102 10.68 81.6769 8.27999C85.9435 5.82666 90.6635 4.59999 95.8369 4.59999C101.064 4.59999 105.81 5.82666 110.077 8.27999C114.344 10.68 117.704 14.04 120.157 18.36C122.61 22.68 123.837 27.5867 123.837 33.08C123.837 38.5733 122.61 43.48 120.157 47.8C117.704 52.12 114.344 55.5067 110.077 57.96C105.81 60.36 101.064 61.56 95.8369 61.56ZM95.8369 55.24C99.7302 55.24 103.224 54.3333 106.317 52.52C109.464 50.7067 111.917 48.12 113.677 44.76C115.49 41.4 116.397 37.5067 116.397 33.08C116.397 28.6 115.49 24.7067 113.677 21.4C111.917 18.04 109.49 15.4533 106.397 13.64C103.304 11.8267 99.7835 10.92 95.8369 10.92C91.8902 10.92 88.3702 11.8267 85.2769 13.64C82.1835 15.4533 79.7302 18.04 77.9169 21.4C76.1569 24.7067 75.2769 28.6 75.2769 33.08C75.2769 37.5067 76.1569 41.4 77.9169 44.76C79.7302 48.12 82.1835 50.7067 85.2769 52.52C88.4235 54.3333 91.9435 55.24 95.8369 55.24Z"
          />
          <path
            className="p3"
            d="M191.607 5.63999V61H184.327V19.72L165.928 61H160.807L142.327 19.64V61H135.047V5.63999H142.887L163.367 51.4L183.848 5.63999H191.607Z"
          />
          <path
            className="p4"
            d="M212.834 5.23999V61H205.554V5.23999H212.834Z"
          />
          <path
            className="p5"
            d="M270.681 61H263.401L234.121 16.6V61H226.841V5.15999H234.121L263.401 49.48V5.15999H270.681V61Z"
          />
          <path
            className="p6"
            d="M326.931 21.4C325.385 18.1467 323.145 15.64 320.211 13.88C317.278 12.0667 313.865 11.16 309.971 11.16C306.078 11.16 302.558 12.0667 299.411 13.88C296.318 15.64 293.865 18.2 292.051 21.56C290.291 24.8667 289.411 28.7067 289.411 33.08C289.411 37.4533 290.291 41.2933 292.051 44.6C293.865 47.9067 296.318 50.4667 299.411 52.28C302.558 54.04 306.078 54.92 309.971 54.92C315.411 54.92 319.891 53.2933 323.411 50.04C326.931 46.7867 328.985 42.3867 329.571 36.84H307.331V30.92H337.331V36.52C336.905 41.1067 335.465 45.32 333.011 49.16C330.558 52.9467 327.331 55.96 323.331 58.2C319.331 60.3867 314.878 61.48 309.971 61.48C304.798 61.48 300.078 60.28 295.811 57.88C291.545 55.4267 288.158 52.04 285.651 47.72C283.198 43.4 281.971 38.52 281.971 33.08C281.971 27.64 283.198 22.76 285.651 18.44C288.158 14.0667 291.545 10.68 295.811 8.27999C300.078 5.82666 304.798 4.59999 309.971 4.59999C315.891 4.59999 321.118 6.06665 325.651 8.99999C330.238 11.9333 333.571 16.0667 335.651 21.4H326.931Z"
          />
          <path
            className="p7"
            d="M389.165 61.56C385.485 61.56 382.178 60.92 379.245 59.64C376.365 58.3067 374.098 56.4933 372.445 54.2C370.792 51.8533 369.938 49.16 369.885 46.12H377.645C377.912 48.7333 378.978 50.9467 380.845 52.76C382.765 54.52 385.538 55.4 389.165 55.4C392.632 55.4 395.352 54.5467 397.325 52.84C399.352 51.08 400.365 48.84 400.365 46.12C400.365 43.9867 399.778 42.2533 398.605 40.92C397.432 39.5867 395.965 38.5733 394.205 37.88C392.445 37.1867 390.072 36.44 387.085 35.64C383.405 34.68 380.445 33.72 378.205 32.76C376.018 31.8 374.125 30.3067 372.525 28.28C370.978 26.2 370.205 23.4267 370.205 19.96C370.205 16.92 370.978 14.2267 372.525 11.88C374.072 9.53332 376.232 7.71999 379.005 6.43999C381.832 5.15999 385.058 4.51999 388.685 4.51999C393.912 4.51999 398.178 5.82666 401.485 8.43999C404.845 11.0533 406.738 14.52 407.165 18.84H399.165C398.898 16.7067 397.778 14.84 395.805 13.24C393.832 11.5867 391.218 10.76 387.965 10.76C384.925 10.76 382.445 11.56 380.525 13.16C378.605 14.7067 377.645 16.8933 377.645 19.72C377.645 21.7467 378.205 23.4 379.325 24.68C380.498 25.96 381.912 26.9467 383.565 27.64C385.272 28.28 387.645 29.0267 390.685 29.88C394.365 30.8933 397.325 31.9067 399.565 32.92C401.805 33.88 403.725 35.4 405.325 37.48C406.925 39.5067 407.725 42.28 407.725 45.8C407.725 48.52 407.005 51.08 405.565 53.48C404.125 55.88 401.992 57.8267 399.165 59.32C396.338 60.8133 393.005 61.56 389.165 61.56Z"
          />
          <path
            className="p8"
            d="M445.318 61.56C440.145 61.56 435.425 60.36 431.158 57.96C426.891 55.5067 423.505 52.12 420.998 47.8C418.545 43.4267 417.318 38.52 417.318 33.08C417.318 27.64 418.545 22.76 420.998 18.44C423.505 14.0667 426.891 10.68 431.158 8.27999C435.425 5.82666 440.145 4.59999 445.318 4.59999C450.545 4.59999 455.291 5.82666 459.558 8.27999C463.825 10.68 467.185 14.04 469.638 18.36C472.091 22.68 473.318 27.5867 473.318 33.08C473.318 38.5733 472.091 43.48 469.638 47.8C467.185 52.12 463.825 55.5067 459.558 57.96C455.291 60.36 450.545 61.56 445.318 61.56ZM445.318 55.24C449.211 55.24 452.705 54.3333 455.798 52.52C458.945 50.7067 461.398 48.12 463.158 44.76C464.971 41.4 465.878 37.5067 465.878 33.08C465.878 28.6 464.971 24.7067 463.158 21.4C461.398 18.04 458.971 15.4533 455.878 13.64C452.785 11.8267 449.265 10.92 445.318 10.92C441.371 10.92 437.851 11.8267 434.758 13.64C431.665 15.4533 429.211 18.04 427.398 21.4C425.638 24.7067 424.758 28.6 424.758 33.08C424.758 37.5067 425.638 41.4 427.398 44.76C429.211 48.12 431.665 50.7067 434.758 52.52C437.905 54.3333 441.425 55.24 445.318 55.24Z"
          />
          <path
            className="p9"
            d="M509.809 61.56C504.635 61.56 499.915 60.36 495.649 57.96C491.382 55.5067 487.995 52.12 485.489 47.8C483.035 43.4267 481.809 38.52 481.809 33.08C481.809 27.64 483.035 22.76 485.489 18.44C487.995 14.0667 491.382 10.68 495.649 8.27999C499.915 5.82666 504.635 4.59999 509.809 4.59999C515.035 4.59999 519.782 5.82666 524.049 8.27999C528.315 10.68 531.675 14.04 534.129 18.36C536.582 22.68 537.809 27.5867 537.809 33.08C537.809 38.5733 536.582 43.48 534.129 47.8C531.675 52.12 528.315 55.5067 524.049 57.96C519.782 60.36 515.035 61.56 509.809 61.56ZM509.809 55.24C513.702 55.24 517.195 54.3333 520.289 52.52C523.435 50.7067 525.889 48.12 527.649 44.76C529.462 41.4 530.369 37.5067 530.369 33.08C530.369 28.6 529.462 24.7067 527.649 21.4C525.889 18.04 523.462 15.4533 520.369 13.64C517.275 11.8267 513.755 10.92 509.809 10.92C505.862 10.92 502.342 11.8267 499.249 13.64C496.155 15.4533 493.702 18.04 491.889 21.4C490.129 24.7067 489.249 28.6 489.249 33.08C489.249 37.5067 490.129 41.4 491.889 44.76C493.702 48.12 496.155 50.7067 499.249 52.52C502.395 54.3333 505.915 55.24 509.809 55.24Z"
          />
          <path
            className="p10"
            d="M592.859 61H585.579L556.299 16.6V61H549.019V5.15999H556.299L585.579 49.48V5.15999H592.859V61Z"
          />
        </mask>
        <path
          className="p1"
          d="M4.44 33.08C4.44 27.64 5.66667 22.76 8.12 18.44C10.5733 14.0667 13.9067 10.6533 18.12 8.19999C22.3867 5.74666 27.1067 4.51999 32.28 4.51999C38.36 4.51999 43.6667 5.98666 48.2 8.91999C52.7333 11.8533 56.04 16.0133 58.12 21.4H49.4C47.8533 18.04 45.6133 15.4533 42.68 13.64C39.8 11.8267 36.3333 10.92 32.28 10.92C28.3867 10.92 24.8933 11.8267 21.8 13.64C18.7067 15.4533 16.28 18.04 14.52 21.4C12.76 24.7067 11.88 28.6 11.88 33.08C11.88 37.5067 12.76 41.4 14.52 44.76C16.28 48.0667 18.7067 50.6267 21.8 52.44C24.8933 54.2533 28.3867 55.16 32.28 55.16C36.3333 55.16 39.8 54.28 42.68 52.52C45.6133 50.7067 47.8533 48.12 49.4 44.76H58.12C56.04 50.0933 52.7333 54.2267 48.2 57.16C43.6667 60.04 38.36 61.48 32.28 61.48C27.1067 61.48 22.3867 60.28 18.12 57.88C13.9067 55.4267 10.5733 52.04 8.12 47.72C5.66667 43.4 4.44 38.52 4.44 33.08Z"
          stroke="white"
          strokeWidth="4"
        />
        <path
          className="p2"
          d="M95.8369 61.56C90.6635 61.56 85.9435 60.36 81.6769 57.96C77.4102 55.5067 74.0235 52.12 71.5169 47.8C69.0635 43.4267 67.8369 38.52 67.8369 33.08C67.8369 27.64 69.0635 22.76 71.5169 18.44C74.0235 14.0667 77.4102 10.68 81.6769 8.27999C85.9435 5.82666 90.6635 4.59999 95.8369 4.59999C101.064 4.59999 105.81 5.82666 110.077 8.27999C114.344 10.68 117.704 14.04 120.157 18.36C122.61 22.68 123.837 27.5867 123.837 33.08C123.837 38.5733 122.61 43.48 120.157 47.8C117.704 52.12 114.344 55.5067 110.077 57.96C105.81 60.36 101.064 61.56 95.8369 61.56ZM95.8369 55.24C99.7302 55.24 103.224 54.3333 106.317 52.52C109.464 50.7067 111.917 48.12 113.677 44.76C115.49 41.4 116.397 37.5067 116.397 33.08C116.397 28.6 115.49 24.7067 113.677 21.4C111.917 18.04 109.49 15.4533 106.397 13.64C103.304 11.8267 99.7835 10.92 95.8369 10.92C91.8902 10.92 88.3702 11.8267 85.2769 13.64C82.1835 15.4533 79.7302 18.04 77.9169 21.4C76.1569 24.7067 75.2769 28.6 75.2769 33.08C75.2769 37.5067 76.1569 41.4 77.9169 44.76C79.7302 48.12 82.1835 50.7067 85.2769 52.52C88.4235 54.3333 91.9435 55.24 95.8369 55.24Z"
          stroke="white"
          strokeWidth="4"
        />
        <path
          className="p3"
          d="M191.607 5.63999V61H184.327V19.72L165.928 61H160.807L142.327 19.64V61H135.047V5.63999H142.887L163.367 51.4L183.848 5.63999H191.607Z"
          stroke="white"
          strokeWidth="4"
        />
        <path
          className="p4"
          d="M212.834 5.23999V61H205.554V5.23999H212.834Z"
          stroke="white"
          strokeWidth="4"
        />
        <path
          className="p5"
          d="M270.681 61H263.401L234.121 16.6V61H226.841V5.15999H234.121L263.401 49.48V5.15999H270.681V61Z"
          stroke="white"
          strokeWidth="4"
        />
        <path
          className="p6"
          d="M326.931 21.4C325.385 18.1467 323.145 15.64 320.211 13.88C317.278 12.0667 313.865 11.16 309.971 11.16C306.078 11.16 302.558 12.0667 299.411 13.88C296.318 15.64 293.865 18.2 292.051 21.56C290.291 24.8667 289.411 28.7067 289.411 33.08C289.411 37.4533 290.291 41.2933 292.051 44.6C293.865 47.9067 296.318 50.4667 299.411 52.28C302.558 54.04 306.078 54.92 309.971 54.92C315.411 54.92 319.891 53.2933 323.411 50.04C326.931 46.7867 328.985 42.3867 329.571 36.84H307.331V30.92H337.331V36.52C336.905 41.1067 335.465 45.32 333.011 49.16C330.558 52.9467 327.331 55.96 323.331 58.2C319.331 60.3867 314.878 61.48 309.971 61.48C304.798 61.48 300.078 60.28 295.811 57.88C291.545 55.4267 288.158 52.04 285.651 47.72C283.198 43.4 281.971 38.52 281.971 33.08C281.971 27.64 283.198 22.76 285.651 18.44C288.158 14.0667 291.545 10.68 295.811 8.27999C300.078 5.82666 304.798 4.59999 309.971 4.59999C315.891 4.59999 321.118 6.06665 325.651 8.99999C330.238 11.9333 333.571 16.0667 335.651 21.4H326.931Z"
          stroke="white"
          strokeWidth="4"
        />
        <path
          className="p7"
          d="M389.165 61.56C385.485 61.56 382.178 60.92 379.245 59.64C376.365 58.3067 374.098 56.4933 372.445 54.2C370.792 51.8533 369.938 49.16 369.885 46.12H377.645C377.912 48.7333 378.978 50.9467 380.845 52.76C382.765 54.52 385.538 55.4 389.165 55.4C392.632 55.4 395.352 54.5467 397.325 52.84C399.352 51.08 400.365 48.84 400.365 46.12C400.365 43.9867 399.778 42.2533 398.605 40.92C397.432 39.5867 395.965 38.5733 394.205 37.88C392.445 37.1867 390.072 36.44 387.085 35.64C383.405 34.68 380.445 33.72 378.205 32.76C376.018 31.8 374.125 30.3067 372.525 28.28C370.978 26.2 370.205 23.4267 370.205 19.96C370.205 16.92 370.978 14.2267 372.525 11.88C374.072 9.53332 376.232 7.71999 379.005 6.43999C381.832 5.15999 385.058 4.51999 388.685 4.51999C393.912 4.51999 398.178 5.82666 401.485 8.43999C404.845 11.0533 406.738 14.52 407.165 18.84H399.165C398.898 16.7067 397.778 14.84 395.805 13.24C393.832 11.5867 391.218 10.76 387.965 10.76C384.925 10.76 382.445 11.56 380.525 13.16C378.605 14.7067 377.645 16.8933 377.645 19.72C377.645 21.7467 378.205 23.4 379.325 24.68C380.498 25.96 381.912 26.9467 383.565 27.64C385.272 28.28 387.645 29.0267 390.685 29.88C394.365 30.8933 397.325 31.9067 399.565 32.92C401.805 33.88 403.725 35.4 405.325 37.48C406.925 39.5067 407.725 42.28 407.725 45.8C407.725 48.52 407.005 51.08 405.565 53.48C404.125 55.88 401.992 57.8267 399.165 59.32C396.338 60.8133 393.005 61.56 389.165 61.56Z"
          stroke="white"
          strokeWidth="4"
        />
        <path
          className="p8"
          d="M445.318 61.56C440.145 61.56 435.425 60.36 431.158 57.96C426.891 55.5067 423.505 52.12 420.998 47.8C418.545 43.4267 417.318 38.52 417.318 33.08C417.318 27.64 418.545 22.76 420.998 18.44C423.505 14.0667 426.891 10.68 431.158 8.27999C435.425 5.82666 440.145 4.59999 445.318 4.59999C450.545 4.59999 455.291 5.82666 459.558 8.27999C463.825 10.68 467.185 14.04 469.638 18.36C472.091 22.68 473.318 27.5867 473.318 33.08C473.318 38.5733 472.091 43.48 469.638 47.8C467.185 52.12 463.825 55.5067 459.558 57.96C455.291 60.36 450.545 61.56 445.318 61.56ZM445.318 55.24C449.211 55.24 452.705 54.3333 455.798 52.52C458.945 50.7067 461.398 48.12 463.158 44.76C464.971 41.4 465.878 37.5067 465.878 33.08C465.878 28.6 464.971 24.7067 463.158 21.4C461.398 18.04 458.971 15.4533 455.878 13.64C452.785 11.8267 449.265 10.92 445.318 10.92C441.371 10.92 437.851 11.8267 434.758 13.64C431.665 15.4533 429.211 18.04 427.398 21.4C425.638 24.7067 424.758 28.6 424.758 33.08C424.758 37.5067 425.638 41.4 427.398 44.76C429.211 48.12 431.665 50.7067 434.758 52.52C437.905 54.3333 441.425 55.24 445.318 55.24Z"
          stroke="white"
          strokeWidth="4"
        />
        <path
          className="p9"
          d="M509.809 61.56C504.635 61.56 499.915 60.36 495.649 57.96C491.382 55.5067 487.995 52.12 485.489 47.8C483.035 43.4267 481.809 38.52 481.809 33.08C481.809 27.64 483.035 22.76 485.489 18.44C487.995 14.0667 491.382 10.68 495.649 8.27999C499.915 5.82666 504.635 4.59999 509.809 4.59999C515.035 4.59999 519.782 5.82666 524.049 8.27999C528.315 10.68 531.675 14.04 534.129 18.36C536.582 22.68 537.809 27.5867 537.809 33.08C537.809 38.5733 536.582 43.48 534.129 47.8C531.675 52.12 528.315 55.5067 524.049 57.96C519.782 60.36 515.035 61.56 509.809 61.56ZM509.809 55.24C513.702 55.24 517.195 54.3333 520.289 52.52C523.435 50.7067 525.889 48.12 527.649 44.76C529.462 41.4 530.369 37.5067 530.369 33.08C530.369 28.6 529.462 24.7067 527.649 21.4C525.889 18.04 523.462 15.4533 520.369 13.64C517.275 11.8267 513.755 10.92 509.809 10.92C505.862 10.92 502.342 11.8267 499.249 13.64C496.155 15.4533 493.702 18.04 491.889 21.4C490.129 24.7067 489.249 28.6 489.249 33.08C489.249 37.5067 490.129 41.4 491.889 44.76C493.702 48.12 496.155 50.7067 499.249 52.52C502.395 54.3333 505.915 55.24 509.809 55.24Z"
          stroke="white"
          strokeWidth="4"
        />
        <path
          className="p10"
          d="M592.859 61H585.579L556.299 16.6V61H549.019V5.15999H556.299L585.579 49.48V5.15999H592.859V61Z"
          stroke="white"
          strokeWidth="4"
        />
      </svg>
      {/* <h4>Stay Tuned </h4> */}
    </section>
  );
};

export default Comingsoon;
