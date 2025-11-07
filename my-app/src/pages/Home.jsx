import React from 'react'
import { homeStyles } from '../assets/dummyStyles'
import Header from '../components/Header'
import Footer from '../components/Footer'
import bat from '../assets/bat.png'
import ball from '../assets/ball.png'

const Home = () => {
    // perspective parent for translateZ
    const heroWrapperStyle = {
        perspective: '1100px',
        WebkitPerspective: '1100px',
    };

    const heroBoxStyle = {
        transformStyle: 'preserve-3d',
        WebkitTransformStyle: 'preserve-3d',
    };

    return (
        <div className={homeStyles.root}>
            <div className={homeStyles.blob1}
                style={{
                    background: homeStyles.blob1Gradient,
                }}>

            </div>

            <div className={homeStyles.blob2}
                style={{
                    background: homeStyles.blob2Gradient,
                }}></div>

            <div className={homeStyles.headerContainer}>
                <Header onSearch={(q) => console.log('search', q)} />
            </div>

            <main className={homeStyles.main}>
                <section className={homeStyles.section}>
                    <div className={homeStyles.heroWrapper} style={heroWrapperStyle}>
                        <div className={homeStyles.heroBox} style={heroBoxStyle}>
                            <div className={homeStyles.heroSpotlight} style={{ background: homeStyles.heroSpotlightGradient }}
                            ></div>


                            <div className={homeStyles.heroContent}>
                                <div className={homeStyles.heroText}>
                                    <h1 className={homeStyles.heroTitle}
                                        style={{
                                            fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",


                                        }}
                                    >
                                        Follow every match. <br /> Live scores, stats & news.
                                    </h1>
                                    <p className={homeStyles.heroSubtitle}>
                                        Live scorecards, upcoming fixtures and match analytics -
                                        Fast live score, schedule tracking and compact analytics
                                    </p>
                                    <div className={homeStyles.heroButtons}>
                                        <button onClick={() => document.getElementById('live')?.scrollIntoView({ behavior: 'smooth' })}
                                            className={homeStyles.primaryButton}
                                        >
                                            View live matches
                                        </button>

                                        <button onClick={() => document.getElementById('mach-detail')?.scrollIntoView({ behavior: 'smooth' })}
                                            className={homeStyles.secondaryButton}
                                        >
                                            Quick Details
                                        </button>
                                    </div>

                                    <div className={homeStyles.heroFeatures}>
                                        <div className={homeStyles.featureTag}>Live Scorecards</div>
                                        <div className={homeStyles.featureTag}>Match detail</div>
                                        <div className={homeStyles.featureTag}>Team stats</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                          {/* subtle outer border/shadow */}
                       <div className={homeStyles.heroShadow} style={{ boxShadow: '0 8px 30px rgba(14, 30, 50, 0.06)', borderRadius: '24px' }} 
                        />
                        <img src={bat} alt='bat' className='hero-bat' />
                         <img src={ball} alt='ball' className='hero-ball' />
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home
