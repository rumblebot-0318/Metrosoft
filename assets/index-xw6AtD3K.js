(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(n){if(n.ep)return;n.ep=!0;const c=r(n);fetch(n.href,c)}})();const Q="인사말",X="주식회사 메트로소프트에 방문해 주셔서 감사합니다.",Y=[" 메트로소프트(주)는 구성원 모두 창의, 도전, 신뢰의 정신를 바탕으로  최신 IT 트랜드를 반영한 S/W 솔루션을 개발하여 고객에게 제공하고 또한 그와 관련된 서비스를 제공하여  고객과 더불어 발전하는 것을 최고의 가치로 삼아 왔습니다. "," Metro-HIS 시스템을 비롯해 Metro-EMR, Metro-ERP, Metro-SMS, Metro-CRM 등이 Small & medium시장에서 우수한 품질을  인정받고 있으며 healthcare 컨텐츠, Cloud 컴퓨팅 및 의료정보 AI부분에도 지속적인 R&D통해 기술력을 축적해 가고 있습니다. "," 메트로소프트㈜는 EndUser의 서비스 향상에 최선을 다하고 있으며 시장 개척을 위해  뛰는 전략적 파트너들과의 함께 성장하는데 중점을 두고 있습니다. 아울러 더 나은 서비스를 위해 당사 자체 솔루션을 더욱 발전시키는데 노력하겠습니다."," 저희 메트로소프트(주)는 S/W 솔루션 개발 및 서비스 전문회사로서 지속 가능한 발전을 추구하고 고객에게 감동을 주고 국가와 사회에 기여하는 기업이 되고자 합니다."],tt="2018년 1월  메트로소프트 대표이사 송범호 올림.",et={title:Q,subtitle:X,content:Y,finish:tt},it={company:"메트로소프트(주)",ceo:"송 범 호",area:"인터넷 전화,옥외광고물관리시스템 위탁사업,종합의료정보시스템 개발, 중소병원용 Package 개발, 컨설팅",address:"경기도 안양시 동안구 호계동 1027 안양IT벨리 606호",tel:"TEL : (031) 465 - 9971~3, 4652 - 070 FAX: (031) 465 - 9974 ",birth:"2001년 7월",homepage:"www.metrosoft.co.kr , www.metro070.com"},st=[{year:"2001",content:["메트로소프트 창업","의료정보시스템 부설연구소 설립","Metro-HIS 솔루션 개발착수"]},{year:"2002",content:["EHK 공식 OCS공급업체 선정","MSP(마이크로소프트 솔루션파트너 의료부문)인증"]},{year:"2003",content:["우리은행 투자사업 협력업체 선정(서울 삼육병원)","정보통신부 선도기술보급업체 선정"]},{year:"2004",content:["삼성SDS와 의료시스템사업부문 협력체결","벤처기업인증(기술신용보증기금 평가센터)","경기 중소기업지원센터 무선인터넷 연구개발사업자 선정","제4회 디지털이노베이션 대상 S/W부문 최우수상수상"]},{year:"2005",content:["마이크로소프트 ISV Partnership 획득","질병관리본부 입국자추적 및 대량환자관리시스템 개발","삼육간호보건대학 산학협동 협정서 체결"]},{year:"2006",content:["벤처기업인증(계속)","질병관리본부 입국자추적관리시스템 연속사업 수주"]},{year:"2007",content:["HP e-Korea 파트너사 인증","경기도 산어방 및 꿈나무 U-건강관리 원격진료 서비스 공급계약체결"]},{year:"2008",content:["기술혁신형 중소기업 INNI-BIZ기업인증"]},{year:"2009",content:["보건복지부 주관 국립정신병원 정보사업서비스 공급업체선정","서울전파관리소 별정통신사업자 등록"]},{year:"2010",content:[" KT MVNO 솔루션 개발 및 공급 "]},{year:"2011~2015",content:[" Metro-HIS 솔루션 병원인증 - 인천나은병원, 힘찬병원(부평, 강북, 목동, 창원, 부산), 현대유비스병원, 대구보광병원, 서울척병원, 바른병원, 고도일병원, 청주효성병원, 예손병원"]},{year:"2013",content:["SK 텔레콤에 모바일 EMR 시스템 공급(중소병원향 Tbiz 모바일 EMR"]},{year:"2015",content:["병역특례업체 지정","아주대학교 가족기업"]},{year:"2016",content:["일학습병행제 기업지정(소프트웨어 산업협회)","Healthcare컨테츠 사업부 신설 (대웅제약 협력)"]},{year:"2017",content:["산학일체형 도제협약기업","Cloud사업부 신설","영림원 소프트랩 Cloud SaaS ERP 동반자 협력체결"]}],ot={init:it,content:st},at={title:"클라우드형 ERP",content:"언제(시간적), 어디서나(공간적) 접근 매체의 제약이 없는 클라우드 세상, Metro-cERP가 함께하는 세상"},lt=[{title:"경영관리 수준에 따른 선진화 관리 실현",contents:"병원의 경영관리 수준에 따른 단계별 도입 및 병원의 성장에 따른 점진적 고도화가 가능한 고객맞춤형 ERP를 제공합니다. | 또한 Best Practice를 적용하여 선진 프로세스를 빠르게 도입/적용 할 수 있습니다.",image:"/01.png"},{title:"Plan-Do-See 경영관리 체계의 완성",contents:"적정 재고를 유지할 수 있게 해주며, 프로세스 통합과 과(팀)별, 월별 계획 체계 이행으로 자원을 효율적으로 사용할 수 있습니다. | 또한 실행성과 피드백으로 계획의 정확도를 높여감으로써 예측 가능한 경영이 됩니다.",image:"/02.png"},{title:"결산기간 단축을 통한 스피드 경영",contents:"사후입력은 데이터 신뢰도를 떨어뜨립니다. Metro-cERP는 모바일/알람/ 진행관리 등으로 신속한 업무를 지원하며, 부서간 데이터 통합으로 결산 기간을 단축합니다. | 마감 후 원가 결산과 수익정보를 적시에 제공합니다.",image:"/03.png"},{title:"관리 목적별 원가분석에 의한 수익 증대",contents:"합리적인 원가분석모델에 의한 정확한 원가정보를 제공하고, 요소별 원가분석으로 원가절감 실행과 관리목절별 원가분석을 통해 수익을 극대화하는 | 성장 가능한 장기 투자계획 수립 등을 지원합니다.",image:"/04.png"}],rt=[{title:"회계관리",contents:["기간별 재무제표 비교 분석, 예산 대비 실적, 조직별 손익정보 등의 경영분석 정보 제공","변경된 법률을 신속하게 적용, 사용자가 편리하게 부가세 신고 가능","결산활동을 위한 다양한 정보 제공","자금 계획 수립 및 자금 적기 등 자금활동을 위한 정보 제공","자금 운영, 금융권과 연동한 전표처리 등의 재무부서 활동의 기록 용이","업무 유형을 고려한 재무활동 기록"]},{title:"인사.급여관리",contents:["인적자원의 적재적소 활동","다양한 방식의 지급, 공제 처리","신속 정확한 정산 관리","조직의 원할한 운영을 위한 신상 정보 관리"]},{title:"원가관리",contents:["산업군별 원가 모델 정립을 통한 쉬운 원가계산","다양한 원가 분석을 통한 원가 절감 및 의사결정 지원","경영자원의 확보/운영 및 궤도 이탈방지"]},{title:"물류관리",contents:["창고별 실재고, 가용재고, 자산재고 반영여부 설정으로 목적에 맞는 적정한 재고 관리 가능","정확한 입출고 관리, 마감관리 및 재고 데이터 추적관리 지원","물품별, 기간별 재고 변동 추이분석 및 재고 변동 원인 분석 가능"]},{title:"구매관리",contents:["물품의 적정재고 관리를 위한 합리적 구매활동 지원","물품의 적소, 적기, 적량, 적가에 구매하기 위한 합리적인 구매정보 관리","구매평가 지표의 분석 결과 및 원가절감을 위한 구매평가관리 지원"]}],nt={Title:at,features:lt,effects:rt},ct=[{title:"안양 메트로 병원 , 메트로 요양 병원",url:"http://www.metrohospital.co.kr/",img:"/01.JPG"},{title:"분당 신우병원",url:"http://www.synwoo.net/",img:"/02.png"},{title:"대구 보광병원",url:"http://www.bkhosp.co.kr/",img:"/03.png"},{title:"한국음주문화센터 KARF병원",url:"http://www.karf.or.kr/",img:"/04.gif"},{title:"청주 효성병원",url:"http://5388hyosunghospital.com/",img:"/05.gif"},{title:"효성 세종병원",url:"http://www.hyosungsj.com/",img:"/06.gif"},{title:"창원 제일병원, 효도투석요양병원",url:"http://www.mjeilh.co.kr/",img:"/07.jpg"},{title:"힘찬병원",url:"http://www.himchanhospital.com/",img:"/08.gif"},{title:"대구 파타마여성병원",url:"http://www.ifatima.co.kr/",img:"/09.gif"},{title:"부천 예손병원",url:"http://www.yesonhospital.com/",img:"/10.png"},{title:"강원도 재활병원",url:"http://www.grh.or.kr/",img:"/11.gif"},{title:"대구 박병원",url:"http://www.parkhospital.co.kr/",img:"/12.png"},{title:"경주 맘존여성병원",url:"http://www.mom-zone.co.kr/",img:"/13.png"},{title:"바른병원",url:"http://www.barun.or.kr/",img:"/14.gif"},{title:"분당 필립병원",url:"http://www.philipmed.com/",img:"/15.jpg"},{title:"대구 로즈마리병원",url:"http://www.rmh.co.kr/",img:"/16.jpg"},{title:"인천 나은병원",url:"http://www.luga.co.kr/",img:"/17.png"},{title:"경산 세명병원",url:"http://www.smhospital.kr/",img:"/18.jpg"},{title:"강남 고도일병원",url:"http://www.godoil.com/",img:"/19.png"},{title:"서울 대한양/한방병원",url:"http://www.daehanh.com/",img:"/20.png"},{title:"튼튼병원",url:"http://www.tntnhospital.co.kr/",img:"/21.jpg"},{title:"분홍빛으로병원",url:"http://www.mastopia.com",img:"/22.png"},{title:"w병원",url:"http://www.w-hand.com/",img:"/23.png"},{title:"대구 드림병원",url:"http://www.dreamh.co.kr/",img:"/24.png"},{title:"현대유비스병원",url:"http://www.uvishospital.co.kr/",img:"/25.png"},{title:"비에비스 나무병원",url:"http://www.vievisnamuh.com/",img:"/26.gif"},{title:"더큰병원",url:"http://www.grandhospital.com/",img:"/28.gif"},{title:"대전 바로세움병원",url:"http://www.grandhospital.com/",img:"/29.png"},{title:"대구 365병원",url:"http://365hospital.com/",img:"/30.jpg"},{title:"광양 사랑병원",url:"http://www.gysarang.com/",img:"/31.gif"},{title:"구리 굿병원",url:"http://www.goodgmc.co.kr/",img:"/32.jpg"},{title:"구미 강남병원",url:"http://www.knhospital.kr/",img:"/33.png"},{title:"대구 보건대학병원",url:"http://www.dhch.ac.kr/",img:"/34.gif"},{title:"대구 서대구병원",url:"http://www.sdg-hosp.com/",img:"/35.gif"},{title:"새움병원",url:"http://www.saeumhospital.kr/",img:"/36.gif"},{title:"광명 새움병원",url:"http://gmsaeum.com/",img:"/37.jpg"},{title:"부천 하이병원",url:"http://hihospital.co.kr/",img:"/38.png"},{title:"새통영병원",url:"http://saety.co.kr/",img:"/39.gif"},{title:"안산 한사랑병원",url:"http://www.hansarang7.com",img:"/40.png"},{title:"의정부 추병원",url:"http://www.choomc.com/",img:"/41.jpg"},{title:"의정부 호원병원",url:"http://www.howon-hospital.co.kr/",img:"/42.jpg"},{title:"선수촌병원",url:"http://www.sunsoochon.co.kr/",img:"/43.png"},{title:"미래의료재단",url:"http://www.mrhealth.co.kr/",img:"/44.png"},{title:"구로 예스병원",url:"http://www.yespine.co.kr/",img:"/45.png"},{title:"21세기 라파병원",url:"http://www.21crapha.com/",img:"/47.gif"},{title:"강남초이스 정형외과병원",url:"http://www.choicehospital.co.kr/",img:"/48.png"},{title:"남기세병원",url:"http://namkise.co.kr/",img:"/49.png"},{title:"대한민국 정형외과",url:"http://www.대한민국정형외과.kr/",img:"/50.gif"},{title:"콕통증클리닉",url:"http://www.kokhospital.com/",img:"/50.jpg"},{title:"안산 서울제일병원",url:"http://www.sj-hospital.co.kr/",img:"/51.jpg"},{title:"가자연세병원",url:"http://www.goyshospital.com/",img:"/52.gif"},{title:"올바른 서울병원",url:"http://www.allbarunhospital.co.kr/",img:"/54.png"},{title:"대구 우리병원",url:"http://www.woorihospital.co.kr/",img:"/55.gif"},{title:"연세 방병원",url:"http://www.ysbang.net/",img:"/56.jpg"},{title:"서울 바른척도병원",url:"http://www.chuckdo.com/",img:"/58.png"},{title:"더서울병원",url:"http://theseoulhospital.com/",img:"/59.png"},{title:"서울 척병원",url:"http://www.chukspine.com/",img:"/27.png"},{title:"김형근 예병원",url:"http://www.김형근예병원.com/",img:"/46.gif"},{title:"대구 척척병원",url:"http://wisemanhospital.com/",img:"/53.gif"},{title:"원주 H병원",url:"http://www.h병원.com/",img:"/57.png"}],dt={content:ct},pt=["병원시스템의 전 부문을 포함하도록 설계되었습니다","환자의 진료 정보를 중심으로 설계되었습니다","의사의 처방 자료 및 진료기록(차트)가 통합되었습니다","의사, 간호사, 기사 등 모든 사용자 직군에서 다년간 현장에서 검증이 완료되었습니다","각종 의료장비와의 연동을 보장함으로써 사용자 편의성을 최대화합니다","전자의무기록 서비스의 도립으로 인한 병원 전반의 Paper Work가 감소합니다."],mt=["획기적인 환자 서비스 개선","병원 수익 증대 및 비용 절감","합리적 경쟁평가를 위한 평가지표 제공","업무 생산성 향상","정보의 정확도, 신속성, 인력 운영의 효율성 증대","의학연구정보의 체계적 관리"],gt={features:pt,effects:mt},ut="유선 전화를 통한 가계비 부담을 줄이기 위해 기존 또는 신규 인터넷 회선을 이용하여 저렴한 통신비용과 PSTN과 PSDN의 양방향 통신 서비스를 지원하여 더욱 안정적인 서비스를 지원합니다.",ht=[{title:"안정성",contents:[{title:"인터넷 또는 전기가 끊겨도 안전합니다."},{title:"인터넷에 문제가 있거나 전원에 문제가 생길 경우 자동으로 KT 유선전화로 전환 되어 안전합니다."}]},{title:"편리성",contents:[{title:"기존 전화번호 그대로 사용이 가능합니다."},{title:"RID(전화번호 변경)서비스로 기존 전화번호와 전화기를 그대로 사용합니다."}]},{title:"품질",contents:[{title:"끊김이나 잡음이 발생하지 않습니다"},{title:"통화 품질을 최우선으로 하여 고가의 무압축 코덱 방식을 채택하여 통화품질을 최우선으로 보장합니다."}]},{title:"저렴한 가격",contents:[{title:"시외를 걸더라도 가격은 시내요금입니다."},{title:"사내 외 구분 없이 가장 낮은 가격으로 통화를 하실 수 있습니다."}]},{title:"유연성",contents:[{title:"특수번호를 걸더라도 가격은 똑같습니다."},{title:"특수번호 등 일반 인터넷 전화에서는 사용할 수 없거나 별도의 요금이 발생되는 타사와는 달리 저희 제품은 시내요금으로 통화가 가능합니다."}]},{title:"본지사 무료통화",contents:[{title:"본사와 지사간 통화는 무료입니다."},{title:"본사와 지사간 통화가 무료일 뿐만 아니라 주거래처까지 저희 제품을 사용하실 경우 통화료는 무료입니다."}]}],ft=["비용절감 : 시외 75% , 이동전화 15% ~ 24% , 국제전화 80%의 비용이 절감됩니다.","기존 네트워크를 사용하여 단말기를 별도 구입하거나 하는 비용이 없습니다.","차세대 망 구성에 맞추어 다양한 부가서비스가 가능합니다.","거리에 무관한 통신 요금으로 시외 요금도 시내요금으로 통화가 가능합니다.","통화 품질을 최우선으로 Busy나 끊김 현상의 발생이 적습니다."],vt={intro:ut,features:ht,effects:ft},bt={title:"Metro-CRM",subtitle:"(Customer Relationship Management)",content:"Metro-CRM은 기존 CRM을 병의원 환경에 맞도록 개발한 솔루션으로 / 환자가 병원을 방문한 후에도 지속적으로 관리를 받을 수 있도록 치료나 / 접종시기, 주의사항 등을 상담 및 문자 서비스로 제공하는 사후건강관리"},yt=["환자에게 다가서는 서비스","진료 예약 부도율의 경감으로 진료 대기 시간 줄임","진료 업무의 효율을 극대화 할 수 있는 발판 마련","고객 만족도와 재방문율을 높이는 효과","상담업무를 지원하는 상담관리시스템 제공"],xt={Title:bt,features:yt},wt={title:"Metro-EMR",subtitle:"(Electronic Medical Record)",content:"의료기관에서 환자 서비스를 위해 필요한 의무기록차트를 전자화하여 / 의사및 진료지원부서에서 진료차트의 공유를 통해 진료정보의 활용도를 높이고 / 차트 보관 및 불출 등의 번거로움을 없애 진료 효율을 높이기 위해 / 개발된 차세대 전자 의무기록 시스템입니다. "},$t=["각종 진료 기록을 코드화된 자료로 보관","다양한 서식(개인별/진료과별) 및 Utility","OCS 및 PACS 시스템과의 연계","Non Chart로 Paperless Hospital 구현","진료과별 특색이 고려된 서식 제공","통합 차트 뷰어를 이용한 Old 차트 스캔 이미지 조회","향후 EHR (Electronic Health Records) 및 DW의 기반 구축","의무기록 관리 비용 감소 및 시간/인력의 효율적인 재분배 효과","DW와의 연계를 이용한 임상연구 자료로의 효율적인 활용"],Et=["Nursing note 및 처방 실행 연계 기록","업무별 간호 서식 표준화","Nursing history, Nursing diagnosis","퇴원 간호 기록지, 환자 중증도 등록 및 특수병동(중환자실, 신생아실, 분만실) 간호 기록 지원","수술 / 마취 기록지 및 각종 설문지 지원"],St=[{title:"전자 의무기록 도입시 예상되는 개인정보 유출 등에 대비하여 인가되지 않은 사용자로부터 데이터를 보호하고 / 정당한 사용자에게는 쉽고 빠르게 데이터에 접근할 수 있도록 구현함으로써 임상 정보의 기밀성, 무결성, 가용성 및 / 환자의 Privacy 보호를 보장하는 보안 서비스를 제공합니다."},{content:["전자 인증 - 국가 공인인증기관의 공인인증서를 사용한 전자 인증 시스템","전자 서명 - 전자 서명에 따라 원문 + 서명 값 저장, 사용자 제한","권한 설정 - 직종 / 직급 / 진료과 / 환자구분에 따른 세분화된 권한 규정관리"]}],_t={intro:wt,treatment:$t,nurse:Et,security:St},Mt={title:"Metro-ERP",subtitle:"(Enterprise Resource Planning)",content:"의료기관에서 환자서비스를 위해 필요한 원 내외의 인력 및 자금, 장비 등의 자원을 효율적으로 관리함으로써 경영효율을 / 향상시키고 경영환경 변화에 효과적으로 대응하기 위해 개발된 병원 차원의 통합행정업무 지원 시스템입니다."},Ct=["급여 지급 항목과 공제 항목을 사용자가 다양하게 설정할 수 있도록 구성","인사 관리의 투명성 제공","다양한 증명서 서식 지원","OCS의 간호 근무 편성과 연계된 급여 계산"],kt=["전표 등록과 연계된 다양한 보조원장 제공(거래처, 입출금, 잔액 등)","OCS와 연계된 자동 분개 기능","영문 재무 재표 지원"],It=["OCS와 연계한 물품관리","자동 청구 기능","다양한 창고 관리 체계 지원 (JIT 체계-Just In Time)","Internet 구매 발주 체계 구축","동일 물품 창고별 이중 관리 기능 제공"],Ht={MetroERP:Mt,management:Ct,accounting:kt,stock:It},Tt={title:"Metro-OCS",subtitle:"(Order Communication System)",content:"Metro-OCS는 환자의 등록 및 진료, 수납, 청구 등 원내의 모든 DATA를 관리 전달하는 것은 물론, / 병원의 모든 행정을 효율적으로 관리할 수 있도록 자동화 및 통합구축을 통하여 진료 생산성을 극대화하여 환자 서비스를 향상시키기 위해 개발된 통합 의료정보시스템입니다. / 중소병원은 물론 의원 및 대학병원까지 적용 가능하며 향후 EMR 시스템으로 전환되는 토대로 제공합니다."},zt=[["신속하고 투명한 수납관리","재원심사로 누락방지/삭감율 격감","수납 및 청구 미수의 통합관리","보험청구의 화면 심사","EDI 청구"],["다 기능의 간편한 처방관리 기능","처방에 근거한 간호관리 자동화","진료재료 청구 자동화","검사결과 및 누적결과조회 통합"],["생산성 향상을 지원하는 행정관리 시스템","OCS와 연계된 EIS 원가분석 기초자료","다중 재고 Location을 지원하는 물류체계"],["처방에 의한 검사 예약 관리","검사장비와의 Interface | (결과 관리의 오류/전송지연방지)","임상병리검사의 QC관리","OCS에 의한 재료관리 및 청구"]],Pt=[{title:"1. 원무/보험",description:"병원의 수납 및 청구 업무를 진료시스템과 얀계한 전산화를 통해 정확하고 신속한 접수/수납업무 를 지원하고 | 진료비 계산 및 보험청구 등의 정확도를 높임으로써 병원의 수익증대와 환자 서비스의 질을 향상시킬 수 있도록 개발된 시스템입니다.",contents:[{title:"원무",contents:[{title:"접수 업무 처리의 신속화",contents:[{title:"환자의 인적사항, 보험사항 ,진료과 스케줄 및 진료 Capacity 등을 한 화면에서 처리 가능"},{title:"진료전달체계를 수용하는 접수가능 (진료의뢰서, 진료사실통보서 등)"}]},{title:"수납 업무 처리의 신속화",contents:[{title:"처방전달과 수가자동계산 기능에 의한 수납처리 기능"},{title:"D/C 처방 및 반환처리를 자유롭게 수용하는 기능"},{title:"환자의 선택에 의한 부분 수납및 잔여분 수납기능"}]},{title:"업무의 질적인 향상"},{title:"진료과, 치료실 및 주사실 예약을 한번의 수납으로 예약절차 수행"},{title:"No Slip System"}]},{title:"보험",contents:[{title:"청구누락방지 / 삭감율 저하(삭감 분석 및 이의 신청기능, 수가정보의 사전관리"},{title:"수납 및 청구 미수의 통합관리"},{title:"보험청구 기간 단축(Daily 심사체계 및 외래 무심사 체계구축)"},{title:"서면 청구 및 인터넷을 통한 EDI 청구 지원"},{title:"법제도 변경 시 신속한 지원"}]}]},{title:"2. 진료",description:"처방입력의 전산화를 통해 원무 및 진료지원 시스템에 정확하고 신솟한 처방전달을 구현함으로써 | 진료진의 업무효율을 증대시키고 환자에 대한 서비스의 질을 높이도록 개발된 시스템입니다.",contents:[{title:"진료",contents:[{title:"다양한 진단서 서식지원"},{title:"PACS 및 EMR과의 연동"},{title:"환자 대기실의 TV와의 Interface를 통한 대기 환자에 대한 배려"},{title:"모든 처방 유형에 대한 전산 처리 기능",contents:[{title:"다양한 처방입력 기능(일일처방, 약속처방, 반복처방, 계속처방 등)"},{title:"상병 및 처방의 편리하고 다양한 검색기능 제공"},{title:"환자별 및 처방별 Message 기능 부가"}]},{title:"진료와 간호업무, 진료지원 및 원무시스템과의 완벽한 연결",contents:[{title:"진료정보, 처방의 접수, 실시, 결과 및 수납여부 등의 상태 정보를 실시간으로 전달"}]},{title:"검사에 대한 다양한 결과 조회",contents:[{title:"진료 화면에서도 검사에 대한 결과를 손쉽게 확인"},{title:"임상병리검사의 경우 Text 결과 뿐만 아니라 수치결과 및 누적결과와 그래프에 의한 상태 변화까지 조회"}]}]},{title:"간호",contents:[{title:"처방에 근거한 간호관리 자동화"},{title:"각종 기록지 지원(입태원 기록지, 수술마취기록지, TPRBP,I/O 기록지 등)"},{title:"외래예약 스케줄 설정의 간편화"}],image:{url:"/00.png",align:"center"}}]},{title:"3. 진료지원",description:"처방과 관련된 주요 진료지원부서 및 특수부서의 포괄적인 전산화를 통해 부분적인 전산화로 인한 정보흐름의 단절을 피하고 | 검사결과의 완벽한 Follow up을 구현하도록 개발된 시스템입니다.",contents:[{title:"의무기록",contents:[{title:"암 환자 분석"},{title:"사용자의 요구 사항에 따른 맞춤 통계"}],image:{url:"/01.jpg",align:"right"}},{title:"약국",contents:[{title:"진료, 간호와 연계한 신속하고 정확한 처방전달"},{title:"병동 약 처방전 자동 출력"},{title:"약자동조제기 및 전광판 Interface"}],image:{url:"/02.jpg",align:"right"}},{title:"종합검진",contents:[{title:"패키지별 묶음 처방 (추가처방가능)"},{title:"원클릭 판정소견 입력"},{title:"종합검진 자동판정"}],image:{url:"/03.jpg",align:"right"}},{title:"일반검진",contents:[{title:"공단 수진자 자격조회 및 자동입력"},{title:"공단 P/G과 자격조회 및 결과 인터페이스"}],image:{url:"/04.jpg",align:"right"}},{title:"방사선",contents:[{title:"외래 검사의 처방/수납 발생시 알림 기능"},{title:"PACS와 연동"},{title:"검사결과의 실시간 전달"}],image:{url:"/05.jpg",align:"right"}},{title:"기능검사",contents:[{title:"PACS와 연동"}],image:{url:"/06.jpg",align:"right"}},{title:"핵의학",contents:[{title:"PACS연동 및 약품 재고 관리"}]},{title:"영양관리",contents:[{title:"병동과 연계하여 정확한 환자의 식이정보 제공"},{title:"영양사 처방 기능"},{title:"다양한 통계 제공 (식수통계, 분류별 통계, 식대통계 등)"}],image:{url:"/07.jpg",align:"right"}},{title:"물리치료[재활의학]",contents:[{title:"메시지 처방에 대한 치료사 상세처방"},{title:"영양사 처방 기능"},{title:"사용자의 필요에 부합하는 다양한 통계제공"}],image:{url:"/08.jpg",align:"right"}}]}],Rt={title:Tt,composition:zt,Lists:Pt},Dt={title:"Metro-iEMR",subtitle:"(Image Electronic Medical Record)",content:"EMR이 도입되지 않은 의료기관에서 환자 서비스를 위해 필요한 기존의 종이 의무 기록 차트를 Scanning하고 이를 체계적으로 / indexing하여 OCS System과 연계함으로써 기존의 진료 시스템을 유지하며 진료지원 부서와 공유도를 높이고 환자 진료의 활용도를 높였습니다. / 또한 차트의 보관 및 불출의 번거로움을 없앤 인적,물적 자원의 절약과 진료 효율을 높이는 영상의무기록시스템입니다."},Lt=["OCS 및 EMR, PACS System과의 연동","동시간대에 동일한 차트를 필요로 하는 부서의 차트 공유 기능","Attach File 등으로 정보 활용 증대","데이터 전환으로 정보 활용성 증대"],Ot={Title:Dt,features:Lt},Nt=[{title:"부서",content:["대표","대표전화/고객문의","","customer@metrosoft.co.kr/031-465-9971~3"]},{title:"성명",content:["HIS 사업부","이용구","이사","yglee@metrosoft.co.kr/010-8877-2676"]},{title:"직위",content:["ERP 사업부","송병민","부장","bmsong@metrosoft.co.kr/010-3465-5448"]},{title:"이메일 주소",content:["HealthCare 컨텐츠","육기호","부사장","/010-2839-4920"]},{content:["통신 부가서비스","이광희","팀장","taesan-3@metrosoft.co.kr/010-9038-8613"]}],jt={address:Nt},At={Title:{title:"헬스케어 서비스",description:"효과적인 기업의 건강관리를 위한 맞춤형 컨설팅 제공과 운영을 위해 토탈 헬스케어 선두기업 메트로소프트(주)가 제안하는 온/오프라인 종합 헬스케어 서비스로서, | 건강검진 뿐만 아니라 건강을 사전에 예방하고 사후 관리할 수 있는 종합 솔루션을 제공합니다."},Model:{title:"사업 모델",content:[{title:"사전예방",content:[{title:"기업 컨설팅"},{title:"힐링룸 구축"},{title:"코어 프로그램"}]},{title:"건강검진",content:[{title:"단체검진 대행"},{title:"특화 솔루션 제공",content:["질병 예측","생체 나이 검사","유전자 검사"]}]},{title:"사후관리",content:[{title:"건강관리 앱"},{title:"정신건강관리",content:["멘탈닥터"]},{title:"메디푸드"}]}]},composition:{title:"힐링존 구성도",content:["검사 (스트레스 측정기)","신체 힐링 과정 (요가치료기구: 선텍 1,2,3)","심층심리 정화과정 (헤드기어 - 소리명상 (종소리, 파도소리, 새소리, 빗소리 등)","집중력 및 자기개발 과정 1 (헤드폰 or 맨탈닥터를 활용한 / 긍정적 자기암시)","집중력 및 자기개발 과정 2 (호흡훈련기 - 상황에 따라 선택)","마지막 단계 1 : 거울보기 (자신과의 대화를 통한 암시의 각인 효과/ 기업현장)","마지막 단계 2 : 상담사 면담"]},table:[{title:"1. 스트레스 측정",img:"/01.png"},{title:"2. 신체 힐링 (1)",img:"/02.png"},{title:"3. 신체 힐링 (2)",img:"/03.png"},{title:"4. 신체 힐링 (3)",img:"/04.png"},{title:"5. 마음 힐링 | (정서 + 무의식 치유)",img:"/05.png"},{title:"6. 내면 심리 힐링 | (긍정 정서 촉진 및 무의식 정화)",img:"/06.png"},{title:"7. 집중력 개발",img:"/07.png"},{title:"8. 집중력 개발 2 (선택)",img:"/08.png"}],core:{title:"코어 운동 센터",description:"과학적으로 검증된 운동 프로그램을 제공하고 재활 전문 물리치료사 및 운동 처방사가 팀을 이뤄 고객의 니즈에 맞게 목표를 설정하고 운동 프로그램 및 생활 습관을 개선하여 주는 곳",content:[{title:"시스템 구상도",img:"/core_01.png"},{title:"운동 재활 ZONE",img:"/core_02.png"},{title:"측정평가 룸",img:"/core_03.png"}]},metal:{title:"멘탈닥터",description:"최고의 디자인, 최고의 품질, 최고의 간편함",content:["/metal_01.png","/metal_02.png"]}},Bt={progress:[{title:"사용자 친화적인 유저 인터페이스 제공",contents:"메인으로 들어가기 위한 인증화면 (부여받은 아이디와 설정된 패스워드로 로그인 실행)",img:"/01.png"},{title:"SMS, LMS, MMS, HPS",contents:"다양한 기능과 작업자의 편의성을 고려하여 다양한 형태의 문자발송이 가능",img:"/02.png"},{title:"그룹관리",contents:"그룹을 생성 하거나 관리하고 사용자 엑셀파일의 연락처를 업로드하는 기능을 제공",img:"/03.png"},{title:"통계",contents:"사용자 설정한 기간, 발송 건수에 대한 통계 및 요금을 확인할 수 있는 기능을 제공",img:"/04.png"}],HPS:{title:"HPS 문자발송",description:"스마트폰과 연동 가입된 통신사의 문자메세지 발송 | (※ SMS,LMS,MMS 문자서비스를 MetroSMS HPS발송으로 요금절감)",contents:[{title:"HPS 문자 발송 (발송방법 동일)",img:"/05.png"},{title:"안드로이드 문자신궁 어플 클릭 실행",img:"/06.png"},{title:"대상건수 및 내용확인 후 전송시작 실행",img:"/07.png"}]},features:[{title:"보안 등급별 사용자 관리 기능",contents:["사용자 ID, 패스워드 관리","사용자의 보안등급 별로 유저관리"]},{title:"그룹 관리 기능",contents:["공용자료 및 개인자료 분류 기능","통합자료 변환 후 조건검색 기능으로 대상자 추출 가능"]},{title:"080 수신거부 자동삽입",contents:["문자 발송시 무료수신거부 체크 문구 자동 삽입"]},{title:"발송 실패건 환급",contents:["문자 발송시 실패 건수에 따라 빌링 처리후 재충전"]},{title:"HPS 발송에 따른 요금 절감",contents:["스마트폰 앱, 모바일 연동에 따른 문자발송 지원(문자신궁)"]}]},Ft={intro:{title:"소개",contents:["휴대폰 번호를 기반으로 친구추가 없이 카카오톡 앱을 통해 정보성 메시지를 고객에게 바로 보내는 정보형 비즈 메시징 API 상품","병원 및 예약/접수 안내 등 고객에게 전달해야 하는 정보라면 카카오 알림톡 API를 활용하여 카카오톡으로 PUSH 메시지를 보낼 수 있습니다.(단, 마케팅성 메시지는 전송 할 수 없습니다.)"]},comp:{title:"시스템 구성",contents:["알림톡 전용 Agent 공급 및 알림톡 발송 실패 시 SMS/LMS 전환 기능 구현 시스템 연동 지원","카카오 알림톡과 알림톡 발송 실패시 문자발송을 동시에 사용 가능합니다.","알림톡 발송 실패 시 2차로 문자 발송을 통하여 성공률을 높일 수 있습니다."],img:"/A_01.png"},features:{title:"특징",contents:[{title:"저렴한 비용",contents:["기존 SMS보다 저렴한 비용으로 1,000자까지 장문 전송 가능","카카오 인증마크 / 하단 링크 버튼 등 기존 문자 메시지와 차별화"]},{title:"마케팅 채널",contents:["옐로 아이디","플러스 친구 기반 고객, 모바일, 커뮤니케이션 가능"]},{title:"메세징 시스템",contents:["고객관리에 최적화된 메시징 시스템 구현","API를 통한 시스템 연동, 고객 티켓팅 및 발송 자동화 가능","실시간 메시지 통계 확인 가능"]}],img:"/A_02.png"}},Zt={TBIZ:{title:"T-BIZ 모바일 EMR",subtitle:"(Mobile EMR)",content:"의료기관에서 환자 서비스를 위해 필요한 의무기록차트를 전자화 하여 의사 및 진료지원부서에서 진료차트의 공유를 통해 진료정보의 활용도를 높이고 차트보관 및 불출의 번거로움 없이 항상 환자의 상태 및 진료상황을 확인할 수 있는 어플리케이션 입니다."},features:["현장 중심 환자 CARE(POC)","사용자 편의성 제고(휴대성)","OCS/EMR과 연동된 통합시스템","의료정보제공이 의료진에서 환자까지 확대","환자의 정보 확인 시 One Stop 서비스","간호 업무 생산성 향상"],functions:{title:["화면","주요 기능"],content:[{content:["재원 환자 조회","현재 병원에 재원 중인 모든 환자를 조회한다."]},{content:["처방 조회","환자의 처방 내역을 조회한다."]},{content:["기록지 조회","의사가 등록한 기록지 내용을 조회한다"]},{content:["투약 기록지 조회","간호사가 등록한 투약 내용을 조회한다"]},{content:["영상 진단 결과 조회","영상진단의학과에서 등록한 판독소견을 조회한다"]},{content:["진단검사결과 조회","진단검사결과를 조회한다"]},{content:["기타서식리스트 조회","스캔한 이미지 리스트를 조회한다"]},{content:["기타서식내용 조회","선택한 이미지의 내용을 조회한다"]},{content:["TPR 조회","TPR을 그래프 형식으로 조회한다"]},{content:["TPR 등록","환자의 TPR을 등록한다"]},{content:["입내원 이력 조회","입원, 외래내원, 응급실 내원한 이력을 조회한다"]}]},examples:[{title:"재원 환자 조회",img:"/01.png"},{title:"처방 조회",img:"/02.png"},{title:"투약 기록지 조회",img:"/03.png"},{title:"기타 서식리스트 조회",img:"/04.png"},{title:"TPR 조회",img:"/05.png"}],security:{title:"보안성 강화",description:"T BIZ 모바일 EMR을 사용하는 병원은 사용자 인증, 컨텐츠 보안, 단말기 분실을 포함한 통합 보안체계 가동",img:"/11.png"},Device:{title:"사용 Device",description:"Android OS 3.1 이상 | 디스플레이 크기 10.1 인치 (갤럭시 기준)",img:"/06.png"},Effects:[{title:"Smart Work 환경 구현",description:"T BIZ 모바일 EMR을 통해 시간과 장소에 얽매이지 않고 언제 어디서나 EMR/OCS의 정보를 쉽고 빠르게 접근이 가능하므로, 의료 분야의 Smart Work 환경 구현과 업무 효율 제고",img:"/08.png"},{title:"T BIZ 모바일 EMR 대면 자료",description:"회진, 수술 전, 수술 후 등 환자 대면 진료 시 환자의 상태를 T BIZ 모바일 EMR을 통해 Visual 효과와 함께 환자에게 설명함으로써 의료 서비스의 질을 향상시키고 환자의 신뢰도와 병원의 이미지 상승 유도",img:"/09.png"},{title:"기대 효과",img:"/10.png"}]};let j=localStorage.getItem("lang")||"ko",t={};function e(i,a){return i&&a.split(".").reduce((r,o)=>r&&r[o],i)||""}function y(i,a){return t.db&&t.db[i]?t.db[i]:a}async function V(i){try{t=await(await fetch(`locales/${i}.json`)).json(),j=i,localStorage.setItem("lang",i),document.querySelectorAll(".lang-btn").forEach(o=>{o.classList.remove("active")});const r=document.getElementById(`lang-btn-${i}`);r&&r.classList.add("active"),qt()}catch(a){console.error("Failed to load translations for lang:",i,a)}}function qt(){document.querySelectorAll("[data-i18n]").forEach(a=>{const r=a.getAttribute("data-i18n"),o=e(t,r);o&&(a.innerHTML=o)})}function Vt(){const i=document.getElementById("lang-btn-ko"),a=document.getElementById("lang-btn-en");i&&i.addEventListener("click",async()=>{j!=="ko"&&(await V("ko"),F())}),a&&a.addEventListener("click",async()=>{j!=="en"&&(await V("en"),F())})}const U=document.getElementById("app-root"),B=document.getElementById("main-nav"),W=document.getElementById("mobile-toggle"),q=document.getElementById("scroll-to-top");let A=null;const Wt={"/":G,"/introduce":Kt,"/business":Ut,"/product":Gt,"/customer":Jt};document.addEventListener("DOMContentLoaded",async()=>{await V(j),Vt(),window.addEventListener("hashchange",F),F(),window.addEventListener("scroll",()=>{const i=document.querySelector(".modern-header");window.scrollY>50?(i.classList.add("scrolled"),q.classList.add("visible")):(i.classList.remove("scrolled"),q.classList.remove("visible"))}),q.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),W.addEventListener("click",()=>{B.classList.toggle("mobile-open");const i=W.querySelector("i");B.classList.contains("mobile-open")?i.className="fa-solid fa-xmark":i.className="fa-solid fa-bars"})});function F(){A&&(clearInterval(A),A=null),B.classList.remove("mobile-open");const i=W.querySelector("i");i&&(i.className="fa-solid fa-bars");const r=(window.location.hash.slice(1)||"/").split("#"),o=r[0].split("?")[0],n=r[1],c=Wt[o]||G;B.querySelectorAll("a").forEach(u=>{const f=u.getAttribute("href");f===`#${o}`||o==="/"&&f==="#/"?u.classList.add("active"):u.classList.remove("active")}),U.innerHTML="",U.appendChild(c()),n?setTimeout(()=>{const u=decodeURIComponent(n),f=document.getElementById(u);f&&f.scrollIntoView({behavior:"smooth",block:"start"})},150):window.scrollTo(0,0)}function g(i,a){const r=document.createElement("div");return r.className="point-div-wrapper",r.innerHTML=`
    <h2 class="point-div-title" id="${a||i}">${i}</h2>
    <div class="point-div-bar"></div>
  `,r}function Z(i){const a=document.createElement("div");a.className="title-list-wrapper";let r="";const n=window.location.hash.slice(1).split("#")[0]||"/",c=n==="/"?"#/":`#${n}`;return i.forEach(d=>{r+=`<a class="title-list-item" href="${c}#${d}">${d}</a>`}),a.innerHTML=`<div class="title-list-container">${r}</div>`,a}function G(){const i=document.createElement("div");i.className="fade-in";const a=["Images/slide_img/Challenge.jpg","Images/slide_img/Creative.jpg","Images/slide_img/Credible.jpg"];i.innerHTML=`
    <!-- Image Slider Carousel -->
    <div class="home-slider-container">
      <img id="slider-img" src="${a[0]}" alt="Metrosoft Slider Image">
    </div>

    <!-- Product Grid Section -->
    <div class="container home-section-padding">
      <div class="product-list-title-container">
        <h2>${e(t,"home.product_section_title")||"Metrosoft의 제품을 활용하세요"}</h2>
        <div class="product-list-title-underline"></div>
      </div>
      <div class="home-products-row">
        <a class="home-product-card-item" href="#/product#EMR">
          <div class="home-product-icon-wrapper icon-emr">
            <i class="fa-solid fa-file-medical"></i>
          </div>
          <span class="product-card-label">EMR</span>
        </a>
        <a class="home-product-card-item" href="#/product#iEMR">
          <div class="home-product-icon-wrapper icon-iemr">
            <i class="fa-solid fa-file-image"></i>
          </div>
          <span class="product-card-label">iEMR</span>
        </a>
        <a class="home-product-card-item" href="#/product#OCS">
          <div class="home-product-icon-wrapper icon-ocs">
            <i class="fa-solid fa-stethoscope"></i>
          </div>
          <span class="product-card-label">OCS</span>
        </a>
        <a class="home-product-card-item" href="#/product#T-BIZ 모바일 EMR">
          <div class="home-product-icon-wrapper icon-tbiz">
            <i class="fa-solid fa-tablet-screen-button"></i>
          </div>
          <span class="product-card-label">T-BIZ</span>
        </a>
        <a class="home-product-card-item" href="#/product#ERP">
          <div class="home-product-icon-wrapper icon-erp">
            <i class="fa-solid fa-chart-pie"></i>
          </div>
          <span class="product-card-label">ERP</span>
        </a>
        <a class="home-product-card-item" href="#/product#CRM">
          <div class="home-product-icon-wrapper icon-crm">
            <i class="fa-solid fa-users-gear"></i>
          </div>
          <span class="product-card-label">CRM</span>
        </a>
      </div>
    </div>

    <!-- Certified Partnership Section -->
    <div class="container home-section-padding">
      <div class="point-div-wrapper">
        <h2 class="point-div-title">${e(t,"home.certified_title")||"Certified Partnership"}</h2>
        <div class="point-div-bar"></div>
      </div>
      <div class="certified-logos-row">
        <div class="cert-logo-box"><img src="Images/Certified/01.png" alt="MS Gold Partner"></div>
        <div class="cert-logo-box"><img src="Images/Certified/02.png" alt="HP Partner"></div>
        <div class="cert-logo-box"><img src="Images/Certified/03.png" alt="OCS Certified"></div>
      </div>
    </div>

    <!-- Hotline Customer Support Table Section -->
    <div class="container home-section-padding" style="margin-bottom: 50px;">
      <div class="point-div-wrapper">
        <h2 class="point-div-title">${e(t,"introduce.summary_contact")||"전화번호"}</h2>
        <div class="point-div-bar"></div>
      </div>
      <div class="hotline-table-wrapper">
        <table class="ui-hotline-table">
          <thead>
            <tr>
              <th colspan="2">${e(t,"home.hotline_title")||"이용안내"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${e(t,"home.hotline_weekday")||"평일"}</td>
              <td>${e(t,"home.hotline_weekday_time")||"09:00 ~ 18:00"}</td>
            </tr>
            <tr>
              <td>${e(t,"home.hotline_weekend")||"주말"}</td>
              <td>${e(t,"home.hotline_weekend_time")||"09:00 ~ 12:00"}</td>
            </tr>
            <tr>
              <td>${e(t,"home.hotline_tel")||"대표전화"}</td>
              <td>${e(t,"home.hotline_tel_num")||"031-465-9971"}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="2">
                <a href="#/customer" class="teal-btn-compact"><i class="fa-solid fa-headset"></i> ${e(t,"home.hotline_btn")||"문의하기"}</a>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  `;let r=0;const o=i.querySelector("#slider-img");return A=setInterval(()=>{r=(r+1)%a.length,o&&(o.style.opacity=0,setTimeout(()=>{o.src=a[r],o.style.opacity=1},300))},5e3),i}function Kt(){const i=document.createElement("div");i.className="container fade-in";const a=e(t,"introduce.anchors")||["인사말","조직도","회사소개","연혁","오시는 길"];i.appendChild(Z(a));const r=y("ceoData",et),o=y("timelineData",ot),n=document.createElement("section");n.className="introduce-section-padding",n.appendChild(g(r.title,"인사말"));let c="";r.content.forEach(v=>{c+=`<p>${v}</p>`}),n.innerHTML+=`
    <div class="glass-card" style="margin-top: 40px;">
      <div class="ceo-introduce-grid">
        <div class="ceo-image-wrapper">
          <img src="Images/ceo.jpeg" alt="CEO" onerror="this.src='https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&fit=crop&q=60'">
        </div>
        <div class="ceo-content">
          <h3>${r.subtitle}</h3>
          ${c}
          <div class="ceo-signature">
            <span>${r.finish}</span>
            <img src="Images/sign.png" alt="Signature" onerror="this.style.display='none'">
          </div>
        </div>
      </div>
    </div>
  `,i.appendChild(n);const d=document.createElement("section");d.className="introduce-section-padding",d.appendChild(g(e(t,"introduce.org_title")||"조직도")),d.innerHTML+=`
    <div class="glass-card" style="margin-top: 40px;">
      <div class="org-chart-wrapper">
        <img src="Images/organization.png" alt="Organization Chart" onerror="this.src='https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=800&fit=crop&q=60'">
      </div>
    </div>
  `,i.appendChild(d);const u=document.createElement("section");u.className="introduce-section-padding",u.appendChild(g(e(t,"nav.introduce")||"회사소개")),u.innerHTML+=`
    <div class="glass-card" style="margin-top: 40px; margin-bottom: 50px;">
      <div style="display: flex; gap: 30px; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 280px; background: var(--bg-secondary); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
          <h4 style="color: var(--primary); margin-bottom: 15px;"><i class="fa-solid fa-building"></i> ${e(t,"introduce.summary_title")||"기업 요약"}</h4>
          <p style="margin-bottom: 8px;"><strong>${e(t,"introduce.summary_company")||"회사명"}:</strong> ${o.init.company}</p>
          <p style="margin-bottom: 8px;"><strong>${e(t,"introduce.summary_ceo")||"대표이사"}:</strong> ${o.init.ceo}</p>
          <p style="margin-bottom: 8px;"><strong>${e(t,"introduce.summary_area")||"사업분야"}:</strong> ${o.init.area}</p>
          <p style="margin-bottom: 8px;"><strong>${e(t,"introduce.summary_birth")||"설립일"}:</strong> ${o.init.birth}</p>
        </div>
        <div style="flex: 1; min-width: 280px; background: var(--bg-secondary); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
          <h4 style="color: var(--primary); margin-bottom: 15px;"><i class="fa-solid fa-phone"></i> ${e(t,"introduce.summary_contact")||"연락처"}</h4>
          <p style="margin-bottom: 8px;"><strong>${e(t,"customer.remote_info_title")||"주소"}:</strong> ${o.init.address}</p>
          <p style="margin-bottom: 8px;"><strong>${e(t,"home.hotline_tel")||"대표전화"}:</strong> ${o.init.tel}</p>
          <p style="margin-bottom: 8px;"><strong>${e(t,"introduce.summary_homepage")||"홈페이지"}:</strong> <a href="http://${o.init.homepage.split(",")[0].trim()}" target="_blank" style="color: var(--secondary)">${o.init.homepage}</a></p>
        </div>
      </div>
    </div>
  `;const f=g(e(t,"introduce.timeline_title")||"연혁");u.appendChild(f);let m="";[...o.content].reverse().forEach(v=>{let $="";v.content.forEach(w=>{$+=`<li>${w}</li>`}),m+=`
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <h3>${v.year}</h3>
        <div class="timeline-content-card">
          <ul class="timeline-detail-list">
            ${$}
          </ul>
        </div>
      </div>
    `}),u.innerHTML+=`
    <div style="margin-top: 40px;" class="history-timeline">
      ${m}
    </div>
  `,i.appendChild(u);const x=document.createElement("section");return x.className="introduce-section-padding",x.appendChild(g(e(t,"introduce.map_title")||"오시는 길")),x.innerHTML+=`
    <div class="glass-card" style="margin-top: 40px;">
      <div style="width: 100%; height: 450px; border-radius: 16px; overflow: hidden; margin-bottom: 40px; border: 1px solid var(--glass-border);">
        <iframe 
          title="Metrosoft Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.452684279093!2d126.9459625!3d37.3710764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5f0000000001%3A0x8f8c0e29b13c2f0d!2z7JWI7JaRSUTrsLjwpoA!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
          width="100%" 
          height="100%" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      <ul class="map-address-list">
        <li><i class="fa-solid fa-location-dot"></i> <span><strong>${e(t,"customer.remote_info_title")||"주소"}:</strong> ${o.init.address}</span></li>
        <li><i class="fa-solid fa-phone"></i> <span><strong>${e(t,"home.hotline_tel")||"대표전화"}:</strong> ${o.init.tel}</span></li>
        <li><i class="fa-solid fa-bus"></i> <span><strong>${e(t,"introduce.map_bus")||"버스 이용"}:</strong> ${e(t,"introduce.map_bus_desc")||"4호선 범계역 6-2번 마을버스 LS타워 하차, 1호선 명학역 하차 후 65번 버스 LS타워 하차"}</span></li>
        <li><i class="fa-solid fa-train"></i> <span><strong>${e(t,"introduce.map_train")||"지하철 이용"}:</strong> ${e(t,"introduce.map_train_desc")||"금정역 2번 출구에서 LS타워 방면 직진 200m"}</span></li>
      </ul>
    </div>
  `,i.appendChild(x),i}function Ut(){const i=document.createElement("div");i.className="container fade-in";const a=e(t,"business.anchors")||["의료정보사업","Metro-cERP","헬스케어 서비스","VOIP 사업","MetroSMS","알림톡","주요 고객사"];i.appendChild(Z(a));const r=y("metrohisData",gt),o=document.createElement("section");o.className="introduce-section-padding",o.appendChild(g(a[0],"의료정보사업"));const n=j==="en"?[{title:"Reception & Billing",color:"#64b764",items:["Fast and transparent billing management","Avoid claims omission / reduce reduction rates","Integrated management of outstanding accounts","On-screen review of insurance claims","EDI claims integration"]},{title:"Outpatient & Ward Care",color:"#649dc2",items:["Full Text-based Electronic Medical Records","Multi-functional easy prescription ordering","Prescription-driven nursing care automation","Automated medical supplies consumption logging","Integrated inquiry of lab results & trends"]},{title:"Medical Treatment Support",color:"#feb40e",items:["Prescription-based test booking management","Interface with testing devices (avoids errors/transmission delay)","Quality Control (QC) of clinical pathology tests","Supplies management and billing via OCS"]},{title:"Business Operations",color:"#9fc543",items:["Administrative management system supporting productivity","EIS cost analysis integrated with OCS","Logistics supporting multiple inventory locations"]}]:[{title:"원무",color:"#64b764",items:["신속하고 투명한 수납관리","재원심사로 누락방지/삭감율 격감","수납 및 청구 미수의 통합관리","보험청구의 화면 심사","EDI 청구"]},{title:"진료",color:"#649dc2",items:["Full Text 기반의 전자의무 기록관리","다 기능의 간편한 처방관리 기능","처방에 근거한 간호관리 자동화","진료재료 청구 자동화","검사결과 및 누적결과 조회 통합"]},{title:"진료지원",color:"#feb40e",items:["처방에 의한 검사 예약 관리","검사장비와의 Interface <br>(결과관리의 오류 / 전송지연방지)","임상병리검사의 QC관리","OCS에 의한 재료관리 및 청구"]},{title:"경영관리",color:"#9fc543",items:["생산성 향상을 지원하는 행정관리 시스템","OCS와 연계된 EIS 원가분석","다중 재고 Location을 지원하는 물류체계"]}];let c="";n.forEach(s=>{let p="";s.items.forEach(b=>{p+=`<li><i class="fa-solid fa-chevron-right" style="color: ${s.color};"></i> <span>${b}</span></li>`}),c+=`
      <div class="his-compo-card">
        <div class="his-compo-title-bar" style="border-bottom: 2px solid ${s.color}">
          <span style="color: ${s.color}">${s.title}</span>
        </div>
        <ul class="his-compo-list">
          ${p}
        </ul>
      </div>
    `});let d="";r.features.forEach(s=>{d+=`<li><i class="fa-solid fa-circle-check"></i> <span>${s}</span></li>`});let u="";r.effects.forEach(s=>{u+=`<li><i class="fa-solid fa-circle-chevron-right"></i> <span>${s}</span></li>`}),o.innerHTML+=`
    <div class="glass-card" style="margin-top: 40px;">
      <!-- Intro Layout Grid (Text on Left, Flowchart on Right) -->
      <div class="his-intro-card">
        <div class="his-intro-text-pane">
          <h3>${e(t,"business.his_title")||"의료정보사업부문"}</h3>
          <p>${e(t,"business.his_intro")||"메트로소프트는 중/소 병원을 중심으로 MetroHIS(메트로 병원정보시스템)을 공급하고 있습니다."}</p>
        </div>
        <div class="his-flowchart-wrapper" title="의료정보사업 사업내용">
          <img src="Images/businessContent.png" alt="사업 내용 구성도">
        </div>
      </div>

      <!-- 의료정보사업의 구성 -->
      <div style="margin-bottom: 50px;">
        <h4 style="font-size: 1.25rem; color: var(--primary); margin-bottom: 25px;"><i class="fa-solid fa-diamond" style="font-size: 0.8rem; margin-right: 8px;"></i> ${e(t,"business.his_compo_title")||"의료정보사업의 구성"}</h4>
        <div class="his-grid-4col">
          ${c}
        </div>
      </div>

      <!-- 특징 & 도입효과 -->
      <div class="business-cards-grid">
        <div class="business-detail-card">
          <h3><i class="fa-solid fa-laptop-medical"></i> ${e(t,"business.his_features_title")||"특징"}</h3>
          <ul class="his-compo-list" style="margin-top: 20px;">
            ${d}
          </ul>
        </div>
        <div class="business-detail-card">
          <h3><i class="fa-solid fa-chart-line"></i> ${e(t,"business.his_effects_title")||"도입효과"}</h3>
          <ul class="his-compo-list" style="margin-top: 20px;">
            ${u}
          </ul>
        </div>
      </div>
    </div>
  `,i.appendChild(o);const f=y("cloudData",nt),m=y("healthcareData",At),x=document.createElement("section");x.className="introduce-section-padding",x.appendChild(g(a[1],"Metro-cERP"));let v="";f.features.forEach(s=>{v+=`
      <div class="home-feature-card" style="text-align: left; display: flex; gap: 20px; align-items: start; padding: 25px;">
        <div class="feature-icon-wrapper" style="margin: 0; flex-shrink: 0;"><i class="fa-solid fa-circle-dot"></i></div>
        <div>
          <h4 style="font-size: 1.15rem; margin-bottom: 8px; color: var(--primary);">${s.title}</h4>
          <p style="font-size: 0.9rem; line-height: 1.5;">${s.contents}</p>
        </div>
      </div>
    `});let $="";f.effects.forEach(s=>{let p="";s.contents.forEach(b=>{p+=`<li style="font-size: 0.9rem; margin-bottom: 8px; color: var(--text-muted);"><i class="fa-solid fa-check" style="color: var(--secondary); margin-right: 8px;"></i> ${b}</li>`}),$+=`
      <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--glass-border); padding: 25px; border-radius: 12px;">
        <h4 style="color: var(--secondary); margin-bottom: 15px;"><i class="fa-solid fa-tag"></i> ${s.title}</h4>
        <ul style="list-style: none;">
          ${p}
        </ul>
      </div>
    `}),x.innerHTML+=`
    <div class="glass-card" style="margin-top: 40px;">
      <div style="text-align: center; margin-bottom: 40px;">
        <h3 style="font-size: 1.8rem; color: var(--primary); margin-bottom: 10px;">${f.Title.title}</h3>
        <p style="font-size: 1.1rem; max-width: 800px; margin: 0 auto;">${f.Title.content}</p>
      </div>
      <h4 style="font-size: 1.3rem; margin-bottom: 25px; color: var(--text-main); border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-star"></i> ${e(t,"business.cloud_title")||"cERP 핵심 가치"}</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 50px;">
        ${v}
      </div>
      <h4 style="font-size: 1.3rem; margin-bottom: 25px; color: var(--text-main); border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-star"></i> ${e(t,"business.cloud_module_title")||"모듈별 세부 효과"}</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
        ${$}
      </div>
    </div>
  `,i.appendChild(x);const w=document.createElement("section");w.className="introduce-section-padding",w.appendChild(g(a[2],"헬스케어 서비스"));let h="";m.Model.content.forEach(s=>{let p="";s.content.forEach(b=>{if(b.content){let K="";b.content.forEach(J=>{K+=`<li style="list-style: circle; margin-left: 20px; font-size: 0.85rem;">${J}</li>`}),p+=`<li style="font-size: 0.95rem; margin-bottom: 8px;"><strong>${b.title}</strong><ul style="margin-top:5px;">${K}</ul></li>`}else p+=`<li style="font-size: 0.95rem; margin-bottom: 8px;">${b.title}</li>`}),h+=`
      <div class="business-detail-card" style="padding: 25px;">
        <h4 style="font-size: 1.25rem; color: var(--primary); margin-bottom: 15px;"><i class="fa-solid fa-square-poll-vertical"></i> ${s.title}</h4>
        <ul class="business-bullets" style="list-style: none;">
          ${p}
        </ul>
      </div>
    `});let _="";m.table.forEach(s=>{_+=`
      <div class="healing-card-item">
        <div class="healing-card-img-wrapper">
          <img src="Images/HealthCare${s.img}" alt="${s.title}">
        </div>
        <div class="healing-card-caption">
          <p>${s.title.replace("|","<br>")}</p>
        </div>
      </div>
    `});let I="";m.core.content.forEach(s=>{I+=`
      <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--glass-border); padding: 25px; border-radius: 12px; text-align: center; flex: 1; min-width: 250px;">
        <h5 style="color: var(--secondary); font-size: 1.1rem; margin-bottom: 15px;">${s.title}</h5>
        <div style="width: 100%; max-width: 280px; margin: 0 auto; border-radius: 8px; overflow: hidden; border: 1px solid var(--glass-border);">
          <img src="Images/HealthCare${s.img}" alt="${s.title}" style="width: 100%; height: auto; display: block;">
        </div>
      </div>
    `});let M="";m.metal.content.forEach(s=>{M+=`
      <div style="border-radius: 12px; overflow: hidden; border: 1px solid var(--glass-border); max-width: 320px;">
        <img src="Images/HealthCare${s}" alt="Mental Doctor" style="width: 100%; height: auto; display: block;">
      </div>
    `}),w.innerHTML+=`
    <div class="glass-card" style="margin-top: 40px;">
      <!-- Title intro -->
      <div style="margin-bottom: 40px;">
        <h3 style="font-size: 1.6rem; color: var(--primary); margin-bottom: 15px;"><i class="fa-solid fa-heart-pulse"></i> ${e(t,"business.healthcare_intro_title")||"헬스케어 서비스 소개"}</h3>
        <p style="font-size: 1.05rem; line-height: 1.7;">${m.Title.description.replace("|","<br>")}</p>
      </div>

      <!-- Business Model -->
      <div style="margin-bottom: 50px;">
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-folder-open"></i> ${m.Model.title}</h3>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
          ${h}
        </div>
      </div>

      <!-- Healing Zone composition -->
      <div style="margin-bottom: 50px;">
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-gem"></i> ${m.composition.title}</h3>
        <ul class="business-bullets" style="margin-bottom: 30px;">
          ${m.composition.content.map(s=>`<li><i class="fa-solid fa-circle-chevron-right"></i> ${s}</li>`).join("")}
        </ul>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;">
          ${_}
        </div>
      </div>

      <!-- Core Program -->
      <div style="margin-bottom: 50px;">
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-dumbbell"></i> ${m.core.title}</h3>
        <p style="font-size: 1rem; color: var(--text-muted); margin-bottom: 25px; line-height: 1.6;">${m.core.description}</p>
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
          ${I}
        </div>
      </div>

      <!-- Mental Doctor -->
      <div>
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-brain"></i> ${m.metal.title}</h3>
        <p style="font-size: 1rem; color: var(--text-muted); margin-bottom: 25px; line-height: 1.6;">${m.metal.description}</p>
        <div style="display: flex; gap: 40px; justify-content: center; flex-wrap: wrap;">
          ${M}
        </div>
      </div>
    </div>
  `,i.appendChild(w);const R=y("voipData",vt),C=y("smsData",Bt),k=y("alarmData",Ft),H=document.createElement("section");H.className="introduce-section-padding",H.appendChild(g(a[3],"VOIP 사업"));let T="";R.features.forEach(s=>{let p="";s.contents.forEach(b=>{p+=`<li><i class="fa-solid fa-arrow-right" style="color: var(--secondary)"></i> ${b.title}</li>`}),T+=`
      <div class="business-detail-card" style="padding: 25px;">
        <h4 style="font-size: 1.2rem; color: var(--primary); margin-bottom: 15px;"><i class="fa-solid fa-circle-phone"></i> ${s.title}</h4>
        <ul class="business-bullets">
          ${p}
        </ul>
      </div>
    `});let D="";R.effects.forEach(s=>{D+=`<li><i class="fa-solid fa-chevron-right" style="color: var(--secondary)"></i> ${s}</li>`}),H.innerHTML+=`
    <div class="glass-card" style="margin-top: 40px;">
      <p class="business-intro-text">${R.intro||"메트로소프트 VoIP 서비스는 병원의 통신망을 혁신하고 비용을 절감하는 솔루션입니다."}</p>
      <h4 style="font-size: 1.3rem; margin-bottom: 25px; color: var(--text-main); border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-shield-halved"></i> ${e(t,"business.voip_security_title")||"안정성 및 가치"}</h4>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 50px;">
        ${T}
      </div>
      <div class="business-detail-card">
        <h3><i class="fa-solid fa-circle-info"></i> ${e(t,"business.voip_effect_title")||"VoIP 도입 효과"}</h3>
        <ul class="business-bullets">
          ${D}
        </ul>
      </div>
    </div>
  `,i.appendChild(H);const z=document.createElement("section");z.className="introduce-section-padding",z.appendChild(g(a[4],"MetroSMS"));let L="";C.features.forEach(s=>{let p="";s.contents.forEach(b=>{p+=`<li><i class="fa-solid fa-check"></i> ${b}</li>`}),L+=`
      <div class="business-detail-card" style="padding: 25px;">
        <h4 style="font-size: 1.15rem; color: var(--primary); margin-bottom: 10px;">${s.title}</h4>
        <ul class="business-bullets">
          ${p}
        </ul>
      </div>
    `});let P="";C.progress.forEach(s=>{P+=`
      <div style="background: var(--bg-secondary); border: 1px solid var(--glass-border); padding: 25px; border-radius: 12px; text-align: center; flex: 1; min-width: 250px;">
        <h5 style="color: var(--secondary); font-size: 1.1rem; margin-bottom: 8px;">${s.title}</h5>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 15px;">${s.contents}</p>
        <div style="border-radius: 8px; overflow: hidden; border: 1px solid var(--glass-border); max-width: 260px; margin: 0 auto;">
          <img src="Images/MetroSMS${s.img}" alt="${s.title}" style="width:100%; display:block;">
        </div>
      </div>
    `});let O="";C.HPS.contents.forEach(s=>{O+=`
      <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--glass-border); padding: 25px; border-radius: 12px; text-align: center; flex: 1; min-width: 250px;">
        <h5 style="color: var(--primary); font-size: 1.05rem; margin-bottom: 15px;">${s.title}</h5>
        <div style="border-radius: 8px; overflow: hidden; border: 1px solid var(--glass-border); max-width: 240px; margin: 0 auto;">
          <img src="Images/MetroSMS${s.img}" alt="${s.title}" style="width:100%; display:block;">
        </div>
      </div>
    `}),z.innerHTML+=`
    <div class="glass-card" style="margin-top: 40px;">
      <!-- Feature chips -->
      <div style="margin-bottom: 50px;">
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-circle-question"></i> ${e(t,"business.sms_feature_title")||"서비스 특징"}</h3>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
          ${L}
        </div>
      </div>

      <!-- Functional flows -->
      <div style="margin-bottom: 50px;">
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-laptop"></i> ${e(t,"business.sms_flow_title")||"문자발송 프로그램 기능"}</h3>
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
          ${P}
        </div>
      </div>

      <!-- HPS -->
      <div>
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 10px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-mobile-screen"></i> ${C.HPS.title}</h3>
        <p style="font-size: 1rem; color: var(--text-muted); margin-bottom: 25px; line-height: 1.6;">${C.HPS.description.replace("|","<br>")}</p>
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
          ${O}
        </div>
      </div>
    </div>
  `,i.appendChild(z);const l=document.createElement("section");l.className="introduce-section-padding",l.appendChild(g(a[5],"알림톡"));let E="";k.features.contents.forEach(s=>{let p="";s.contents.forEach(b=>{p+=`<li><i class="fa-solid fa-check"></i> ${b}</li>`}),E+=`
      <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--glass-border); padding: 25px; border-radius: 12px;">
        <h5 style="color: var(--primary); font-size: 1.1rem; margin-bottom: 12px;"><i class="fa-solid fa-tag"></i> ${s.title}</h5>
        <ul class="business-bullets">
          ${p}
        </ul>
      </div>
    `}),l.innerHTML+=`
    <div class="glass-card" style="margin-top: 40px;">
      <!-- Intro -->
      <div style="margin-bottom: 40px;">
        <h3 style="font-size: 1.4rem; color: var(--primary); margin-bottom: 15px;"><i class="fa-solid fa-message"></i> ${e(t,"business.alarm_intro_title")||"카카오 알림톡 서비스"}</h3>
        <ul class="business-bullets">
          ${k.intro.contents.map(s=>`<li><i class="fa-solid fa-circle-chevron-right"></i> ${s}</li>`).join("")}
        </ul>
      </div>

      <!-- System config -->
      <div style="display: flex; gap: 40px; align-items: center; margin-bottom: 50px; flex-wrap: wrap;">
        <div style="flex: 1.2; min-width: 280px;">
          <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-gear"></i> ${e(t,"business.alarm_sys_title")||"시스템 구성"}</h3>
          <ul class="business-bullets">
            ${k.comp.contents.map(s=>`<li><i class="fa-solid fa-circle-check"></i> ${s}</li>`).join("")}
          </ul>
        </div>
        <div style="flex: 0.8; min-width: 250px; display: flex; justify-content: center;">
          <div style="border-radius: 12px; overflow: hidden; border: 1px solid var(--glass-border); max-width: 280px;">
            <img src="Images/Alarm${k.comp.img}" alt="System Diagram" style="width:100%; display:block;">
          </div>
        </div>
      </div>

      <!-- Features -->
      <div>
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-star"></i> ${e(t,"business.alarm_feature_title")||"주요 장점"}</h3>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 30px;">
          ${E}
        </div>
        <div style="display: flex; justify-content: center;">
          <div style="border-radius: 12px; overflow: hidden; border: 1px solid var(--glass-border); max-width: 280px;">
            <img src="Images/Alarm${k.features.img}" alt="Alimtalk Feature Card" style="width:100%; display:block;">
          </div>
        </div>
      </div>
    </div>
  `,i.appendChild(l);const S=document.createElement("section");S.className="introduce-section-padding",S.appendChild(g(a[6],"주요 고객사"));let N="";return dt.content.forEach(s=>{N+=`
      <div class="modern-client-card" onclick="window.open('${s.url}', '_blank')" title="${s.title}">
        <img src="Images/Hospital_icon${s.img}" alt="${s.title}" onerror="this.outerHTML='<strong class=&quot;fallback-text&quot;>${s.title}</strong>'">
      </div>
    `}),S.innerHTML+=`
    <div class="glass-card" style="margin-top: 40px;">
      <div class="modern-clients-grid">
        ${N}
      </div>
    </div>
  `,i.appendChild(S),i}function Gt(){const i=document.createElement("div");i.className="container fade-in";const a=e(t,"product.anchors")||["EMR","iEMR","OCS","T-BIZ 모바일 EMR","ERP","CRM"];i.appendChild(Z(a));const r=y("emrData",_t),o=y("iemrData",Ot),n=y("ocsData",Rt),c=document.createElement("section");c.className="introduce-section-padding",c.appendChild(g("EMR"));let d="";r.treatment.forEach(l=>{d+=`<li><i class="fa-solid fa-circle-check"></i> <span>${l}</span></li>`});let u="";r.nurse.forEach(l=>{u+=`<li><i class="fa-solid fa-clipboard-check"></i> <span>${l}</span></li>`});let f="";r.security[1].content.forEach(l=>{f+=`<li><i class="fa-solid fa-lock"></i> <span>${l}</span></li>`}),c.innerHTML+=`
    <div class="glass-card" style="margin-top: 40px;">
      <div class="product-showcase-layout" style="margin-bottom: 50px;">
        <div class="product-info-panel">
          <h3>${r.intro.title}</h3>
          <div class="product-subtitle">${r.intro.subtitle}</div>
          <div class="product-description-box">${r.intro.content.replace(/\//g,"<br>")}</div>
        </div>
        <div class="product-graphic-panel">
          <div class="product-badge-graphic">
            <i class="fa-solid fa-folder-open"></i>
            <h4>${e(t,"product.emr_badge_title")||"전자의무기록"}</h4>
            <p>Electronic Medical Record</p>
          </div>
        </div>
      </div>
      
      <div class="business-cards-grid" style="margin-bottom: 50px;">
        <div class="business-detail-card">
          <h3><i class="fa-solid fa-user-doctor"></i> ${e(t,"product.emr_treatment_title")||"의사 진료부문"}</h3>
          <ul class="product-checklist full-width">
            ${d}
          </ul>
        </div>
        <div class="business-detail-card">
          <h3><i class="fa-solid fa-user-nurse"></i> ${e(t,"product.emr_nurse_title")||"간호 관리부문"}</h3>
          <ul class="product-checklist full-width">
            ${u}
          </ul>
        </div>
      </div>

      <div style="background: rgba(244, 63, 94, 0.05); border: 1px solid rgba(244, 63, 94, 0.2); padding: 30px; border-radius: 16px;">
        <h3 style="color: var(--accent); font-size: 1.4rem; margin-bottom: 15px;"><i class="fa-solid fa-shield-halved"></i> ${e(t,"product.emr_security_title")||"EMR 보안 체계"}</h3>
        <p style="font-size: 1rem; color: var(--text-muted); margin-bottom: 25px; line-height: 1.7;">${r.security[0].title.replace(/\//g,"<br>")}</p>
        <ul class="product-checklist" style="list-style: none;">
          ${f}
        </ul>
      </div>
    </div>
  `,i.appendChild(c);const m=document.createElement("section");m.className="introduce-section-padding",m.appendChild(g("iEMR"));let x="";o.features.forEach(l=>{x+=`<li><i class="fa-solid fa-circle-check"></i> <span>${l}</span></li>`}),m.innerHTML+=`
    <div class="glass-card" style="margin-top: 40px;">
      <div class="product-showcase-layout">
        <div class="product-info-panel">
          <h3>${o.Title.title}</h3>
          <div class="product-subtitle">${o.Title.subtitle}</div>
          <div class="product-description-box">${o.Title.content.replace(/\//g,"<br>")}</div>
          <div class="product-features-checklist">
            <h4><i class="fa-solid fa-star"></i> ${e(t,"product.iemr_features_title")||"주요 핵심 기능"}</h4>
            <ul class="product-checklist full-width">
              ${x}
            </ul>
          </div>
        </div>
        <div class="product-graphic-panel">
          <div class="product-badge-graphic">
            <i class="fa-solid fa-file-image"></i>
            <h4>${e(t,"product.iemr_badge_title")||"영상의무기록"}</h4>
            <p>Image EMR System</p>
          </div>
        </div>
      </div>
    </div>
  `,i.appendChild(m);const v=document.createElement("section");v.className="introduce-section-padding",v.appendChild(g("OCS"));let $="";n.composition.forEach(l=>{let E="";l.forEach(S=>{E+=`<li><i class="fa-solid fa-check"></i> <span>${S}</span></li>`}),$+=`
      <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--glass-border); padding: 20px; border-radius: 12px;">
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
          ${E}
        </ul>
      </div>
    `});let w="";n.Lists.forEach(l=>{let E="";l.contents.forEach(S=>{let N="";S.contents&&S.contents.forEach(s=>{let p="";s.contents&&(p+='<ul style="list-style: none; padding-left: 20px; margin-top: 5px;">',s.contents.forEach(b=>{p+=`<li style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 5px;">- ${b.title}</li>`}),p+="</ul>"),N+=`<li style="font-size: 0.95rem; margin-bottom: 8px;"><strong>${s.title}</strong>${p}</li>`}),E+=`
        <div style="background: var(--bg-primary); border: 1px solid var(--glass-border); padding: 20px; border-radius: 12px; flex: 1; min-width: 250px;">
          <h5 style="color: var(--secondary); font-size: 1.1rem; margin-bottom: 15px;"><i class="fa-solid fa-angles-right"></i> ${S.title}</h5>
          <ul style="list-style: none;">
            ${N}
          </ul>
        </div>
      `}),w+=`
      <div style="margin-bottom: 40px;">
        <h4 style="color: var(--primary); font-size: 1.3rem; margin-bottom: 10px; border-bottom: 1px solid var(--glass-border); padding-bottom: 8px;">${l.title}</h4>
        <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 20px; line-height: 1.6;">${l.description.replace(/\|/g,"<br>")}</p>
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
          ${E}
        </div>
      </div>
    `}),v.innerHTML+=`
    <div class="glass-card" style="margin-top: 40px;">
      <div class="product-showcase-layout" style="margin-bottom: 50px;">
        <div class="product-info-panel">
          <h3>${n.title.title}</h3>
          <div class="product-subtitle">${n.title.subtitle}</div>
          <div class="product-description-box">${n.title.content.replace(/\//g,"<br>")}</div>
        </div>
        <div class="product-graphic-panel">
          <div class="product-badge-graphic">
            <i class="fa-solid fa-notes-medical"></i>
            <h4>처방전달 시스템</h4>
            <p>Order Communication System</p>
          </div>
        </div>
      </div>
      <h4 style="font-size: 1.3rem; margin-bottom: 20px; color: var(--text-main);"><i class="fa-solid fa-sitemap"></i> 시스템 구성도 및 연동 범위</h4>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 60px;">
        ${$}
      </div>
      <h4 style="font-size: 1.4rem; margin-bottom: 30px; color: var(--text-main); text-align: center;"><i class="fa-solid fa-list-check"></i> 세부 모듈 및 상세 스펙</h4>
      <div>
        ${w}
      </div>
    </div>
  `,i.appendChild(v);const h=y("tbizData",Zt),_=y("erpData",Ht),I=y("crmData",xt),M=document.createElement("section");M.className="introduce-section-padding",M.appendChild(g("T-BIZ 모바일 EMR"));let R="";h.features.forEach(l=>{R+=`<li><i class="fa-solid fa-circle-check"></i> ${l}</li>`});let C="";h.functions.content.forEach(l=>{C+=`
      <tr>
        <td style="font-weight:700; color:var(--text-main);">${l.content[0]}</td>
        <td>${l.content[1]}</td>
      </tr>
    `});let k="";h.examples.forEach(l=>{k+=`
      <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--glass-border); padding: 25px; border-radius: 12px; text-align: center; flex: 1; min-width: 250px;">
        <h5 style="color: var(--secondary); font-size: 1.1rem; margin-bottom: 15px;">${l.title}</h5>
        <div style="border-radius: 8px; overflow: hidden; border: 1px solid var(--glass-border); max-width: 240px; margin: 0 auto; background: #000;">
          <img src="Images/T_Biz${l.img}" alt="${l.title}" style="width:100%; display:block;">
        </div>
      </div>
    `});let H="";h.Effects.forEach(l=>{let E="";l.description&&(E=`<p style="font-size: 0.95rem; margin-bottom: 15px; color: var(--text-muted);">${l.description.replace(/\|/g,"<br>")}</p>`),H+=`
      <div style="background: var(--bg-secondary); border: 1px solid var(--glass-border); padding: 25px; border-radius: 12px; text-align: center; flex: 1; min-width: 250px;">
        <h5 style="color: var(--primary); font-size: 1.1rem; margin-bottom: 10px;">${l.title}</h5>
        ${E}
        <div style="border-radius: 8px; overflow: hidden; border: 1px solid var(--glass-border); max-width: 240px; margin: 0 auto;">
          <img src="Images/T_Biz${l.img}" alt="${l.title}" style="width:100%; display:block;">
        </div>
      </div>
    `}),M.innerHTML+=`
    <div class="glass-card" style="margin-top: 40px;">
      <!-- Title Showcase -->
      <div style="display: flex; gap: 40px; align-items: start; margin-bottom: 50px; flex-wrap: wrap;">
        <div style="flex: 0.8; min-width: 220px; display: flex; justify-content: center;">
          <img src="Images/TBiz.png" alt="T-BIZ Tablet" style="max-width: 240px; border-radius: 12px; border: 1px solid var(--glass-border); box-shadow: 0 8px 30px rgba(0,0,0,0.3);">
        </div>
        <div style="flex: 1.2; min-width: 280px;">
          <h3 style="font-size: 1.8rem; color: var(--primary); margin-bottom: 5px;">${h.TBIZ.title}</h3>
          <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 20px; font-family:'Outfit',sans-serif;">${h.TBIZ.subtitle}</p>
          <div style="font-size: 1.05rem; line-height: 1.8; color: var(--text-muted); border-top: 1px solid var(--glass-border); padding-top: 20px;">
            ${h.TBIZ.content.split("/").map(l=>`<p style="margin-bottom:10px;">${l}</p>`).join("")}
          </div>
        </div>
      </div>

      <!-- Features -->
      <div style="margin-bottom: 50px;">
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-star"></i> ${e(t,"business.his_features_title")||"특징"}</h3>
        <ul class="product-checklist" style="list-style: none;">
          ${R}
        </ul>
      </div>

      <!-- Functions Table -->
      <div style="margin-bottom: 50px;">
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-table-list"></i> ${e(t,"product.tbiz_functions_title")||"주요 기능"}</h3>
        <table class="support-directory-table">
          <thead>
            <tr>
              <th>${h.functions.title[0]}</th>
              <th>${h.functions.title[1]}</th>
            </tr>
          </thead>
          <tbody>
            ${C}
          </tbody>
        </table>
      </div>

      <!-- Examples Screenshots -->
      <div style="margin-bottom: 50px;">
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-images"></i> ${e(t,"product.tbiz_examples_title")||"실행 화면 예시"}</h3>
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
          ${k}
        </div>
      </div>

      <!-- Security and Device -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 50px;">
        <div class="business-detail-card" style="padding: 25px; text-align: center;">
          <h4 style="color: var(--primary); font-size: 1.25rem; margin-bottom: 15px;"><i class="fa-solid fa-shield-halved"></i> ${h.security.title}</h4>
          <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 20px; line-height:1.6;">${h.security.description}</p>
          <div style="border-radius: 8px; overflow: hidden; border: 1px solid var(--glass-border); max-width: 240px; margin: 0 auto;">
            <img src="Images/T_Biz${h.security.img}" alt="Security Diagram" style="width:100%;">
          </div>
        </div>
        <div class="business-detail-card" style="padding: 25px; text-align: center;">
          <h4 style="color: var(--primary); font-size: 1.25rem; margin-bottom: 15px;"><i class="fa-solid fa-tablet-screen-button"></i> ${h.Device.title}</h4>
          <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 20px; line-height:1.6;">${h.Device.description.replace(/\|/g,"<br>")}</p>
          <div style="border-radius: 8px; overflow: hidden; border: 1px solid var(--glass-border); max-width: 240px; margin: 0 auto;">
            <img src="Images/T_Biz${h.Device.img}" alt="Devices" style="width:100%;">
          </div>
        </div>
      </div>

      <!-- Effects -->
      <div>
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-chart-pie"></i> ${e(t,"product.tbiz_effects_title")||"기대 효과 및 가치"}</h3>
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
          ${H}
        </div>
      </div>
    </div>
  `,M.appendChild(g("T-BIZ 모바일 EMR")),i.appendChild(M);const T=document.createElement("section");T.className="introduce-section-padding",T.appendChild(g("ERP"));let D="";_.management.forEach(l=>{D+=`<li><i class="fa-solid fa-user-gear"></i> <span>${l}</span></li>`});let z="";_.accounting.forEach(l=>{z+=`<li><i class="fa-solid fa-file-invoice-dollar"></i> <span>${l}</span></li>`});let L="";_.stock.forEach(l=>{L+=`<li><i class="fa-solid fa-boxes-stacked"></i> <span>${l}</span></li>`}),T.innerHTML+=`
    <div class="glass-card" style="margin-top: 40px;">
      <div class="product-showcase-layout" style="margin-bottom: 50px;">
        <div class="product-info-panel">
          <h3>${_.MetroERP.title}</h3>
          <div class="product-subtitle">${_.MetroERP.subtitle}</div>
          <div class="product-description-box">${_.MetroERP.content.replace(/\//g,"<br>")}</div>
        </div>
        <div class="product-graphic-panel">
          <div class="product-badge-graphic">
            <i class="fa-solid fa-sitemap"></i>
            <h4>${e(t,"product.erp_badge_title")||"통합자원관리"}</h4>
            <p>Enterprise Resource Planning</p>
          </div>
        </div>
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
        <div class="business-detail-card" style="padding: 25px;">
          <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 20px;"><i class="fa-solid fa-users"></i> ${e(t,"product.erp_hr_title")||"인사 / 급여"}</h4>
          <ul class="product-checklist full-width" style="font-size: 0.95rem;">
            ${D}
          </ul>
        </div>
        <div class="business-detail-card" style="padding: 25px;">
          <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 20px;"><i class="fa-solid fa-scale-balanced"></i> ${e(t,"product.erp_accounting_title")||"회계 / 재무"}</h4>
          <ul class="product-checklist full-width" style="font-size: 0.95rem;">
            ${z}
          </ul>
        </div>
        <div class="business-detail-card" style="padding: 25px;">
          <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 20px;"><i class="fa-solid fa-warehouse"></i> ${e(t,"product.erp_logistics_title")||"물류 / 자산"}</h4>
          <ul class="product-checklist full-width" style="font-size: 0.95rem;">
            ${L}
          </ul>
        </div>
      </div>
    </div>
  `,i.appendChild(T);const P=document.createElement("section");P.className="introduce-section-padding",P.appendChild(g("CRM"));let O="";return I.features.forEach(l=>{O+=`<li><i class="fa-solid fa-circle-check"></i> <span>${l}</span></li>`}),P.innerHTML+=`
    <div class="glass-card" style="margin-top: 40px;">
      <div class="product-showcase-layout">
        <div class="product-info-panel">
          <h3>${I.Title.title}</h3>
          <div class="product-subtitle">${I.Title.subtitle}</div>
          <div class="product-description-box">${I.Title.content.replace(/\//g,"<br>")}</div>
          <div class="product-features-checklist">
            <h4><i class="fa-solid fa-star"></i> ${e(t,"product.crm_features_title")||"환자 밀착 관리 효과"}</h4>
            <ul class="product-checklist full-width">
              ${O}
            </ul>
          </div>
        </div>
        <div class="product-graphic-panel">
          <div class="product-badge-graphic">
            <i class="fa-solid fa-users-viewfinder"></i>
            <h4>${e(t,"product.crm_badge_title")||"고객관계관리"}</h4>
            <p>Hospital CRM System</p>
          </div>
        </div>
      </div>
    </div>
  `,i.appendChild(P),i}function Jt(){const i=document.createElement("div");i.className="container fade-in";const a=e(t,"customer.anchors")||["고객지원","원격지원"];i.appendChild(Z(a));const r=y("customerData",jt),o=document.createElement("section");o.className="introduce-section-padding",o.appendChild(g(a[0],"고객지원"));let n="";r.address.forEach(d=>{const u=d.content[0]||"",f=d.content[1]||"",m=d.content[2]||"",x=d.content[3]||"",[v,$]=x.split("/");let w="";v&&(w+=`<a href="mailto:${v}"><i class="fa-solid fa-envelope"></i> ${v}</a>`),$&&(w+=`<a href="tel:${$}"><i class="fa-solid fa-phone"></i> ${$}</a>`),n+=`
      <tr>
        <td class="support-dept">${u}</td>
        <td>${f}</td>
        <td>${m}</td>
        <td>
          <div class="support-contact">
            ${w}
          </div>
        </td>
      </tr>
    `}),o.innerHTML+=`
    <div class="glass-card" style="margin-top: 40px;">
      <h3 style="font-size: 1.5rem; margin-bottom: 10px; color: var(--primary);"><i class="fa-solid fa-address-book"></i> ${e(t,"customer.support_title")||"부서별 담당 임직원 연락망"}</h3>
      <p style="margin-bottom: 30px;">${e(t,"customer.support_subtitle")||"병원 솔루션 구축 문의 및 유지 보수 관련하여 신속하게 답변해 드리겠습니다."}</p>
      <table class="support-directory-table">
        <thead>
          <tr>
            <th>${e(t,"customer.support_table_dept")||"부서"}</th>
            <th>${e(t,"customer.support_table_name")||"성명"}</th>
            <th>${e(t,"customer.support_table_pos")||"직위"}</th>
            <th>${e(t,"customer.support_table_contact")||"연락처 / 이메일"}</th>
          </tr>
        </thead>
        <tbody>
          ${n}
        </tbody>
      </table>
    </div>
  `,i.appendChild(o);const c=document.createElement("section");return c.className="introduce-section-padding",c.appendChild(g(a[1],"원격지원")),c.innerHTML+=`
    <div class="remote-grid" style="margin-top: 40px; margin-bottom: 60px;">
      <div class="remote-card-box">
        <div class="remote-icon-badge">
          <i class="fa-solid fa-desktop"></i>
        </div>
        <h3>${e(t,"customer.remote_card_title")||"원격 지원 서비스"}</h3>
        <p style="font-size: 0.98rem; line-height: 1.6; color: var(--text-muted); min-height: 75px;">${e(t,"customer.remote_card_desc")||"원활한 장애 처리를 위해 엔지니어가 실시간으로 원격 지원을 연결합니다. 원격지원 요청 시 아래 전용 뷰어 프로그램을 다운로드하고 실행해 주시기 바랍니다."}</p>
        <a href="http://www.metrosoft.co.kr/remotesupport/metrosoft.exe" class="btn-download" target="_blank">
          <i class="fa-solid fa-download"></i> ${e(t,"customer.remote_btn_download")||"원격지원 뷰어 다운로드"}
        </a>
      </div>
      <div class="remote-card-box">
        <div class="remote-icon-badge blue-dot">
          <i class="fa-solid fa-headset" style="color: var(--secondary);"></i>
        </div>
        <h3>${e(t,"customer.remote_info_title")||"고객센터 기술 안내"}</h3>
        <p style="font-size: 0.98rem; line-height: 1.6; color: var(--text-muted); min-height: 75px;">${e(t,"customer.remote_info_desc")||"전화 및 팩스 문의는 업무시간 내에 가능하며, 휴일에는 온라인 기술 요청 접수가 처리됩니다."}</p>
        <p style="text-align: left; font-size: 0.95rem; border-top: 1px solid var(--glass-border); padding-top: 20px; color: var(--text-muted); width: 100%;">
          <strong><span>${e(t,"customer.remote_tech_tel")||"기술문의"}</span>:</strong> 031-465-9971<br>
          <strong><span>${e(t,"customer.remote_tech_fax")||"FAX"}</span>:</strong> 031-465-9974<br>
          <strong><span>${e(t,"customer.remote_tech_email")||"이메일"}</span>:</strong> customer@metrosoft.co.kr
        </p>
      </div>
    </div>
  `,i.appendChild(c),i}
