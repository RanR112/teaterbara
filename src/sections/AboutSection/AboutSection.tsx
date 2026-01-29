import React from "react";
import styles from "./AboutSection.module.scss";
import { useSectionObserver } from "../../hooks/useSectionObserver";
import { Stat } from "./Stat";
import { about } from "../../assets/index.assets";

const AboutSection: React.FC = () => {
    const { ref, isVisible } = useSectionObserver({ threshold: 0.2 });

    return (
        <section
            ref={ref}
            id="about"
            className={`${styles.about} ${isVisible ? styles.visible : ""}`}
        >
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        TENTANG <span>KAMI</span>
                    </h2>
                    <div className={styles.titleUnderline} />
                </div>

                <div className={styles.aboutContent}>
                    {/* IMAGE */}
                    <div className={styles.aboutImage}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.imagePlaceholder}>
                                <img src={about} alt="About Image" />
                            </div>
                            <div className={styles.imageOverlay}></div>
                        </div>
                    </div>

                    {/* TEXT */}
                    <div className={styles.aboutText}>
                        <h3 className={styles.aboutSubtitle}>
                            Berkarya Dengan Semangat Yang Membara
                        </h3>

                        <p className={styles.aboutParagraph}>
                            <strong>Komunitas Teater Bara</strong> merupakan
                            wadah kreativitas seni peran yang terbentuk dari
                            semangat kolektif pegiat seni di Banjarnegara sejak
                            3 Januari 2014. Berawal dari pertemuan yang
                            sederhana di Politeknik Banjarnegara, komunitas ini
                            baru beranggotakan beberapa kelompok teater seperti
                            Teater Skansa (SMK N 1 Bawang), Teater Asal Rawuh
                            (SMK Darunnajah Banjarmangu) dan Teater Mega (SMA N
                            1 Banjarnegara) yang pada kala itu menyelenggarakan
                            Parade Teater pertama sekaligus deklarasi awal
                            lahirnya Teater di Banjarnegara. Meski pada awalnya
                            keanggotaan belum semasif sekarang, dedikasi para
                            pendirinya berhasil meletakkan fondasi yang kuat
                            dengan menyelenggarakan kompetisi drama pertama bagi
                            pelajar, yaitu Festival Teater Pelajar Banjarnegara
                            tahun 2015 yang kemudian dilanjutkan dengan
                            kesuksesan Festival Teater Bara 2 pada tahun 2017.
                        </p>

                        <p className={styles.aboutParagraph}>
                            Seiring berjalannya waktu, eksistensi Teater Bara
                            semakin menguat mulai tahun 2018 dengan
                            menyelenggarakan berbagai pementasan produksi secara
                            masif dari beberapa divisi kelompok yang menghimpun
                            sekolah-sekolah menjadi satu. Gelombang keanggotaan
                            semakin besar pada tahun 2019, di mana banyak
                            kelompok teater mulai bergabung ke dalam komunitas
                            ini, di antaranya Teater Bala, Teater Mega, Teater
                            Skansa, Teater Teanida, dan Teater Asal Rawuh.
                            Sinergi ini menjaga konsistensi komunitas yang
                            terbukti dengan digelarnya kembali Festival Teater
                            Bara dalam format pementasan produksi pada tahun
                            2019, serta suksesnya festival jilid ke-2 pada awal
                            tahun 2021 yang menjadi bukti ketahanan berkarya
                            tepat saat pandemi mulai mereda.
                        </p>

                        <p className={styles.aboutParagraph}>
                            Memasuki fase baru di tahun 2023, Teater Bara
                            melakukan inovasi program dengan menggelar workshop
                            dan festival teater monolog berkolaborasi bersama
                            SMK Darunnajah Banjarmangu di Balai Budaya
                            Banjarnegara. Kegiatan ini membawa dampak yang
                            sangat signifikan, yakni memantik sekolah dan kampus
                            yang sebelumnya belum memiliki wadah seni untuk
                            segera membentuk UKM maupun ekstrakurikuler teater
                            baru. Hingga saat ini, meski sempat menghadapi
                            dinamika pasang surut seperti tantangan pendanaan,
                            Teater Bara tetap eksis di tengah masyarakat umum
                            demi mewujudkan visinya untuk menjaring dan
                            mengenalkan teater di Banjarnegara melalui berbagai
                            kolaborasi yang berkelanjutan
                        </p>

                        {/* STATS */}
                        <div className={styles.statsGrid}>
                            <Stat
                                visible={isVisible}
                                value={20}
                                label="Pertunjukan"
                            />
                            <Stat
                                visible={isVisible}
                                value={100}
                                label="Anggota Aktif"
                            />
                            <Stat
                                visible={isVisible}
                                value={10}
                                label="Penghargaan"
                            />
                        </div>

                        {/* MISSION */}
                        <div className={styles.mission}>
                            <h4>Misi Kami</h4>
                            <ul>
                                <li>
                                    Menjadikan wadah untuk menjalin relasi dan
                                    tukar pikiran antar teater
                                </li>
                                <li>
                                    Menggali potensi teater di kalangan
                                    muda{" "}
                                </li>
                                <li>
                                    Menciptakan karya yang tidak hanya sebagai
                                    tontonan namun terdapat pesan yang membawa
                                    perenungan sebagai tuntunan
                                </li>
                                <li>
                                    Memperkenalkan teater kepada kalangan
                                    masyarakat
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
