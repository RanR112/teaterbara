import React from "react";
import { motion } from "framer-motion";
import styles from "./AboutSection.module.scss";
import { Stat } from "./Stat";
import { about1, about2, about3, about4 } from "../../assets/index.assets";
import { staggerContainer, fadeUp } from "../../animations/variants";

const AboutSection: React.FC = () => {
    return (
        <motion.section
            id="about"
            className={styles.about}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
        >
            <div className={styles.container}>
                {/* HEADER */}
                <motion.div className={styles.sectionHeader} variants={fadeUp}>
                    <h2 className={styles.sectionTitle}>
                        TENTANG <span>KAMI</span>
                    </h2>
                    <div className={styles.titleUnderline} />
                </motion.div>

                <motion.div
                    className={styles.aboutWrapper}
                    variants={staggerContainer}
                >
                    {/* BLOCK 1 */}
                    <motion.div
                        className={styles.contentBlock}
                        variants={fadeUp}
                    >
                        <div className={styles.imageContainer}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.imagePlaceholder}>
                                    <img
                                        src={about1}
                                        alt="Teater Bara - Awal Mula"
                                    />
                                </div>
                                <div className={styles.imageOverlay} />
                            </div>
                        </div>

                        <div className={styles.textContainer}>
                            <h3 className={styles.aboutSubtitle}>
                                Dari Pertemuan Sederhana, Bara Itu Menyala
                            </h3>
                            <p className={styles.aboutParagraph}>
                                <strong>Komunitas Teater Bara</strong> merupakan
                                wadah kreativitas seni peran yang terbentuk dari
                                semangat kolektif pegiat seni di Banjarnegara
                                sejak 3 Januari 2014. Berawal dari pertemuan
                                yang sederhana di Politeknik Banjarnegara,
                                komunitas ini baru beranggotakan beberapa
                                kelompok teater seperti Teater Skansa (SMK N 1
                                Bawang), Teater Asal Rawuh (SMK Darunnajah
                                Banjarmangu) dan Teater Mega (SMA N 1
                                Banjarnegara) yang pada kala itu
                                menyelenggarakan Parade Teater pertama sekaligus
                                deklarasi awal lahirnya Teater di Banjarnegara.
                                Meski pada awalnya keanggotaan belum semasif
                                sekarang, dedikasi para pendirinya berhasil
                                meletakkan fondasi yang kuat dengan
                                menyelenggarakan kompetisi drama pertama bagi
                                pelajar, yaitu Festival Teater Pelajar
                                Banjarnegara tahun 2015 yang kemudian
                                dilanjutkan dengan kesuksesan Festival Teater
                                Bara 2 pada tahun 2017.
                            </p>
                        </div>
                    </motion.div>

                    {/* BLOCK 2 */}
                    <motion.div
                        className={`${styles.contentBlock} ${styles.reverse}`}
                        variants={fadeUp}
                    >
                        <div className={styles.imageContainer}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.imagePlaceholder}>
                                    <img
                                        src={about2}
                                        alt="Teater Bara - Perkembangan"
                                    />
                                </div>
                                <div className={styles.imageOverlay} />
                            </div>
                        </div>

                        <div className={styles.textContainer}>
                            <h3 className={styles.aboutSubtitle}>
                                Bertumbuh, Berkembang, dan Menguat Bersama
                            </h3>
                            <p className={styles.aboutParagraph}>
                                Seiring berjalannya waktu, eksistensi Teater
                                Bara semakin menguat mulai tahun 2018 dengan
                                menyelenggarakan berbagai pementasan produksi
                                secara masif dari beberapa divisi kelompok yang
                                menghimpun sekolah-sekolah menjadi satu.
                                Gelombang keanggotaan semakin besar pada tahun
                                2019, di mana banyak kelompok teater mulai
                                bergabung ke dalam komunitas ini, di antaranya
                                Teater Bala, Teater Mega, Teater Skansa, Teater
                                Teanida, dan Teater Asal Rawuh. Sinergi ini
                                menjaga konsistensi komunitas yang terbukti
                                dengan digelarnya kembali Festival Teater Bara
                                dalam format pementasan produksi pada tahun
                                2019, serta suksesnya festival jilid ke-2 pada
                                awal tahun 2021 yang menjadi bukti ketahanan
                                berkarya tepat saat pandemi mulai mereda.
                            </p>
                        </div>
                    </motion.div>

                    {/* BLOCK 3 */}
                    <motion.div
                        className={styles.contentBlock}
                        variants={fadeUp}
                    >
                        <div className={styles.imageContainer}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.imagePlaceholder}>
                                    <img
                                        src={about3}
                                        alt="Teater Bara - Inovasi"
                                    />
                                </div>
                                <div className={styles.imageOverlay} />
                            </div>
                        </div>

                        <div className={styles.textContainer}>
                            <h3 className={styles.aboutSubtitle}>
                                Menyulut Bara di Generasi Baru
                            </h3>
                            <p className={styles.aboutParagraph}>
                                Memasuki fase baru di tahun 2023, Teater Bara
                                melakukan inovasi program dengan menggelar
                                workshop dan festival teater monolog
                                berkolaborasi bersama SMK Darunnajah Banjarmangu
                                di Balai Budaya Banjarnegara. Kegiatan ini
                                membawa dampak yang sangat signifikan, yakni
                                memantik sekolah dan kampus yang sebelumnya
                                belum memiliki wadah seni untuk segera membentuk
                                UKM maupun ekstrakurikuler teater baru. Hingga
                                saat ini, meski sempat menghadapi dinamika
                                pasang surut seperti tantangan pendanaan, Teater
                                Bara tetap eksis di tengah masyarakat umum demi
                                mewujudkan visinya untuk menjaring dan
                                mengenalkan teater di Banjarnegara melalui
                                berbagai kolaborasi yang berkelanjutan
                            </p>
                        </div>
                    </motion.div>

                    {/* BLOCK 4 */}
                    <motion.div
                        className={`${styles.contentBlock} ${styles.reverse} ${styles.finalBlock}`}
                        variants={fadeUp}
                    >
                        <div className={styles.imageContainer}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.imagePlaceholder}>
                                    <img src={about4} alt="Teater Bara - Tim" />
                                </div>
                                <div className={styles.imageOverlay} />
                            </div>
                        </div>

                        <div className={styles.textContainer}>
                            <h3 className={styles.aboutSubtitle}>
                                Bara yang Tetap Menyala Hingga Kini
                            </h3>

                            {/* STATS */}
                            <div className={styles.statsGrid}>
                                <Stat value={20} label="Pertunjukan" />
                                <Stat value={100} label="Anggota Aktif" />
                                <Stat value={10} label="Penghargaan" />
                            </div>

                            {/* MISSION */}
                            <div className={styles.mission}>
                                <h4>Misi Kami</h4>
                                <ul>
                                    <li>Menjalin relasi antar teater</li>
                                    <li>Menggali potensi teater muda</li>
                                    <li>Menciptakan karya bermakna</li>
                                    <li>Memperkenalkan teater ke masyarakat</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default AboutSection;
