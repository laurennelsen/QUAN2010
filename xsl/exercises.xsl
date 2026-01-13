<?xml version="1.0" encoding="UTF-8" ?>


  <xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:import href="./core/pretext-solution-manual-latex.xsl"/>


  <xsl:param name="latex.preamble.late">
      <xsl:text>\renewtcolorbox{inlinesolution}[4]</xsl:text>
      <xsl:text>{inlinesolutionstyle, title={\hyperref[#4]{#1~#2}\notblank{#3}{\space#3}{}}, after={\clearpage}}&#xa;</xsl:text>
  </xsl:param>

</xsl:stylesheet>