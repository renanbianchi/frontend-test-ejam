interface nortonAntivirusProps {
  width?: string
  height?: string
}

export const NortonAntivirus = ({ width, height }: nortonAntivirusProps) => (
  <svg
    width={`${width ? width : `82`}`}
    height={`${height ? height : `32`}`}
    viewBox="0 0 82 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1_58)">
      <path
        d="M13.7223 4.2514C6.14549 4.2514 0 10.4645 0 18.1246C0 25.7847 6.14549 31.9973 13.7223 31.9973C21.2991 31.9973 27.4442 25.7851 27.4442 18.125C27.4442 10.4649 21.2991 4.25182 13.7223 4.25182V4.2514ZM13.671 8.60374C18.8748 8.60374 23.0879 12.8636 23.0879 18.1246C23.0879 23.3855 18.8748 27.645 13.671 27.645C8.46732 27.645 4.24104 23.3855 4.24104 18.1246C4.24104 12.8636 8.46732 8.60374 13.671 8.60374Z"
        fill="#FEB511"
      />
      <path
        d="M31.5187 7.24373V19.3291H33.902V10.9482L38.13 19.3291H40.7052V7.24373H38.3227V14.7824L34.4145 7.24414H32.0312L31.5187 7.24373ZM46.1508 10.2361C45.5515 10.2352 44.958 10.3539 44.4042 10.5853C43.8504 10.8167 43.3472 11.1564 42.9234 11.5847C42.4997 12.0131 42.1637 12.5218 41.9347 13.0817C41.7058 13.6416 41.5883 14.2416 41.5891 14.8475C41.5891 17.3988 43.6268 19.4717 46.1508 19.4717C48.6748 19.4717 50.7248 17.3988 50.7248 14.847C50.7248 12.2958 48.6743 10.2361 46.1508 10.2361ZM46.1631 12.4769C47.4546 12.4769 48.4952 13.5422 48.4952 14.847C48.4952 16.1527 47.4542 17.2048 46.1635 17.2048C44.8728 17.2048 43.8187 16.1523 43.8187 14.847C43.8201 14.2188 44.0676 13.6167 44.5071 13.1725C44.9465 12.7283 45.5417 12.4782 46.1631 12.4769ZM51.343 10.4317V19.3291H53.9318V15.7175C53.9318 14.4371 54.2081 13.6798 54.6677 13.131C55.1446 12.5619 55.5636 12.2278 56.8436 12.2108L57.8145 12.224L57.8276 16.2933C57.8296 16.9159 57.8604 17.441 57.9986 17.8883C58.3163 18.9163 59.0892 19.4796 60.584 19.4796C61.2671 19.4796 61.9329 19.3872 62.5643 19.1521L62.254 17.3465C61.9575 17.4613 61.6041 17.5339 61.3347 17.5364C60.5754 17.5434 60.4003 17.2077 60.4028 16.4048V12.224H62.2667L62.2732 10.4313H60.4028L60.3967 7.91233L58.3065 7.90611L57.8596 10.4313H56.6431C56.2544 10.4313 55.9555 10.4346 55.6612 10.5101C54.4148 10.8276 53.9031 11.7544 53.5886 12.3351L52.8576 10.4313L51.343 10.4317ZM67.1305 10.2361C66.5313 10.2352 65.9378 10.354 65.384 10.5854C64.8303 10.8169 64.3271 11.1565 63.9034 11.5849C63.4797 12.0133 63.1437 12.5219 62.9148 13.0818C62.6859 13.6416 62.5684 14.2417 62.5692 14.8475C62.5692 17.3988 64.6069 19.4717 67.1305 19.4717C69.654 19.4717 71.7045 17.3988 71.7045 14.847C71.7045 12.2958 69.6545 10.2361 67.1305 10.2361ZM67.1432 12.4769C68.4343 12.4769 69.4753 13.5422 69.4753 14.847C69.4753 16.1527 68.4343 17.2048 67.1432 17.2048C65.8521 17.2048 64.7984 16.1523 64.7984 14.847C64.7998 14.2187 65.0474 13.6166 65.4869 13.1724C65.9264 12.7282 66.5217 12.4781 67.1432 12.4769ZM77.3875 10.2361C76.2034 10.2423 75.2309 10.8184 74.3252 11.8029L73.8254 10.4301H72.3137V19.3291H74.8377V13.2151C75.096 12.9196 75.6794 12.3724 76.4264 12.3733C77.3752 12.3741 77.7196 12.9909 77.7204 13.6815L77.7335 19.3291H80.3087V13.6035C80.3108 11.3768 79.0295 10.2265 77.3875 10.2361ZM80.5428 11.463V10.6124H80.2968V10.4359H80.9844V10.6124H80.7322V11.463H80.5428ZM81.1144 11.463V10.4359H81.3878L81.5699 11.1161L81.7413 10.4363H82V11.463H81.8561V10.6634L81.6318 11.463H81.4953L81.2903 10.6489V11.463H81.1144ZM27.5725 1.09078V2.15316H28.6233V1.09036L27.5725 1.09078ZM27.5725 2.15316H25.625V3.21513H27.5725V2.15316ZM25.625 3.21513H24.6512V5.28767H25.625V3.21513ZM25.625 5.28767V6.29824H26.6245V5.28767H25.625ZM26.6245 5.28767H27.7262V4.29036H26.6241L26.6245 5.28767ZM25.625 6.29824H24.6512V7.33451H23.6389V6.29824H21.9862V7.03606H21.0891V7.94301H22.076V8.95357H21.0764L21.0891 7.94301H20.0129V9.53637H19.0137V10.5337H18.3348V11.5442H17.6173C16.074 14.1026 14.8358 16.4661 14.1191 18.2149C12.1524 15.5675 11.2299 14.6141 9.57142 13.6815C8.97856 13.3482 8.45048 13.1932 8.07205 13.4095C7.67886 13.6342 7.56365 14.3438 8.05975 14.8989C11.1388 18.3467 11.6928 20.1863 12.8129 22.8135C13.1466 23.5969 13.7764 23.9331 14.4914 23.9534C14.8735 23.9641 15.3426 23.8473 15.657 23.4742C15.803 23.3013 15.8456 23.0647 15.9645 22.7745C16.9006 20.4931 17.9391 18.2054 19.4372 16.0263L19.4495 14.8864H20.2441L20.2314 13.8759H21.0895L21.0772 12.6709H22.0764V11.5699H21.0641L21.0768 10.5337H22.0764V11.5699H23.0756V10.5208H23.8575V9.29016H24.7668V8.44829H25.625V6.29824ZM23.6389 6.29824H24.6512V5.28767H23.6389V6.29824ZM23.6389 5.28767V4.31606H22.627V5.28767H23.6389Z"
        fill="black"
      />
      <path
        d="M25.625 3.22011H26.6225V4.28415H25.625V3.22011ZM28.618 2.15607H29.6975V3.22011H28.618V2.15607ZM28.618 0.00270081H29.6975V1.09203H28.618V0.00270081Z"
        fill="#FEB511"
      />
      <path
        d="M32.0858 28.8989H31.6102V22.2676H32.4114V24.719C32.7283 24.3177 33.1723 24.0412 33.6635 24.0566C34.9948 24.098 35.4868 25.2976 35.5015 26.4566C35.5196 27.846 34.764 28.978 33.5438 28.9909C33.0215 28.9963 32.5664 28.7612 32.2687 28.3202L32.0858 28.8989ZM32.4163 27.8501C32.7435 28.1548 32.8066 28.3198 33.4401 28.3256C34.3921 28.3343 34.6364 27.2661 34.6344 26.5241C34.6319 25.5886 34.3773 24.7873 33.5512 24.7633C33.0309 24.748 32.6758 25.0079 32.4265 25.2922L32.4163 27.8501ZM36.194 30.5544L36.2986 29.943C36.971 30.0781 37.4564 29.9314 37.7209 29.182L36.055 24.1523H36.889L38.0657 28.1614L39.1772 24.1523H39.9919L38.3736 29.3627C38.0001 30.5656 37.1268 30.7782 36.194 30.5544ZM42.4445 28.2L42.852 27.6309C43.4728 28.0802 43.9402 28.2626 44.7036 28.2659C45.5293 28.27 46.0566 27.8356 46.0521 27.1637C46.0394 25.2765 42.8369 26.3347 42.7819 23.8191C42.7577 22.7165 43.729 22.1735 44.6659 22.1685C45.3731 22.1648 46.0365 22.2729 46.4879 22.5954L46.1353 23.2363C45.9233 23.0236 45.1603 22.8814 44.7458 22.8781C44.0242 22.8727 43.5683 23.1616 43.5474 23.7747C43.4867 25.5786 46.8618 24.5859 46.8561 27.1447C46.854 28.3376 45.9729 28.9581 44.7011 28.9693C43.5265 28.9797 42.6528 28.4429 42.4445 28.2ZM52.1644 28.8926V24.1598H52.6584L52.8507 24.9316C53.2394 24.4085 53.9126 24.0595 54.4792 24.0611C55.1487 24.0632 55.4333 24.5403 55.5194 24.8901C55.9417 24.3927 56.5083 24.0611 57.0819 24.0566C58.07 24.0483 58.2967 24.777 58.2967 25.5944V28.8926L57.4952 28.8955V25.8559C57.4952 25.1903 57.416 24.7583 56.8519 24.7699C56.2266 24.7836 55.8937 25.1994 55.6658 25.405V28.8955H54.8339V25.766C54.8339 25.131 54.7318 24.7633 54.1984 24.7749C53.6613 24.7865 53.5042 25.005 52.9835 25.4224V28.896L52.1644 28.8926ZM62.27 28.3285C61.8555 28.7675 61.3225 28.978 60.8231 28.9735C60.0273 28.9656 59.3824 28.4761 59.3857 27.6802C59.389 26.709 60.0515 26.44 60.6194 26.2493C61.1794 26.0611 61.6263 25.9961 62.1343 25.9065C62.156 25.0622 61.9793 24.75 61.2963 24.7455C60.6805 24.7413 60.1524 25.0244 59.9248 25.1434L59.6345 24.6021C59.8592 24.4251 60.4246 24.0661 61.3504 24.0578C62.3656 24.0495 62.9707 24.6257 62.9711 25.7034L62.9724 28.8955H62.4787L62.27 28.3285ZM62.1409 26.4578C61.6366 26.5573 61.3598 26.6414 60.9642 26.7687C60.4562 26.9316 60.2106 27.1907 60.2167 27.662C60.2229 28.1561 60.5447 28.3463 60.9457 28.3368C61.4254 28.3256 61.7346 28.1668 62.1376 27.8597L62.1409 26.4578ZM71.4466 28.2543L71.5688 28.8172C71.2876 28.9739 70.8669 28.9631 70.6984 28.9639C69.7095 28.9668 69.5611 28.3185 69.5611 27.5795V24.7418H68.8624V24.1523H69.5611L69.8005 22.8031L70.3733 22.801V24.1523H71.427V24.7418H70.3733V27.6226C70.3733 28.3256 70.6631 28.3285 70.9358 28.3397C71.1982 28.3509 71.4466 28.2543 71.4466 28.2543ZM75.5163 27.8559L75.8566 28.3471C75.5003 28.6298 75.1006 28.9751 74.2412 28.978C72.8095 28.9822 72.1707 27.8746 72.1764 26.5577C72.1826 25.2454 72.782 24.0653 74.1018 24.0582C75.7426 24.0487 75.9739 25.6508 75.973 26.7675H73.0444C73.0456 27.6644 73.4065 28.3148 74.1449 28.3219C74.9075 28.3289 75.5163 27.8559 75.5163 27.8559ZM73.044 26.2H75.126C75.085 25.4568 74.8952 24.6746 74.1092 24.6846C73.2666 24.6949 73.1006 25.4804 73.044 26.2ZM80.2387 28.3467C79.9037 28.675 79.3711 28.9598 78.6836 28.9648C77.3662 28.9747 76.7176 27.9476 76.7176 26.5283C76.7172 25.1148 77.4216 24.0591 78.7914 24.0566C79.3986 24.0553 79.8352 24.3003 80.1493 24.5581L79.7947 25.1024C79.597 24.9432 79.1624 24.7219 78.7824 24.7272C77.85 24.7405 77.5597 25.4348 77.5618 26.5063C77.5639 27.3987 77.7594 28.3007 78.7783 28.3103C79.0813 28.3132 79.4474 28.2046 79.841 27.8593L80.2387 28.3467ZM47.4801 30.5544L47.5842 29.943C48.2566 30.0781 48.7425 29.9314 49.0069 29.182L47.3407 24.1523H48.175L49.3518 28.1614L50.4633 24.1523H51.2779L49.6597 29.3627C49.2861 30.5656 48.4124 30.7782 47.4801 30.5544ZM64.3364 28.8926V24.1598H64.8305L65.0224 24.9316C65.4114 24.4085 66.1396 24.0557 66.7977 24.0611C67.6505 24.0682 67.9842 24.828 67.9842 25.6271V28.8955H67.1523V25.766C67.1523 25.131 67.0498 24.7633 66.5168 24.7749C65.9797 24.7865 65.6763 25.005 65.1552 25.4224V28.896L64.3364 28.8926Z"
        fill="#999999"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_58">
        <rect width="82" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
)