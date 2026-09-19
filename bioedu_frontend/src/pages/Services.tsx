import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dna, 
  FlaskConical, 
  ArrowRight, 
  Check, 
  Zap, 
  ShieldCheck, 
  Users, 
  Lightbulb, 
  Target, 
  Heart, 
  X, 
  Send, 
  FileText, 
  Clock, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Activity
} from 'lucide-react';
import InteractiveDnaHelix from '../components/InteractiveDnaHelix';
import FramerCard from '../components/FramerCard';
import { NgsCardBackground, RnaCellCardBackground, UmapCardBackground } from '../components/ServiceCardVisuals';

interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  tools: string[];
  turnaround: string;
  deliverables: string[];
  description: string;
  workflow: { step: string; desc: string }[];
}

const serviceDetails: Record<string, ServiceDetail> = {
  ngs: {
    id: 'ngs',
    title: 'NGS Data Analysis',
    tagline: 'End-to-end genomic variant discovery and read alignment',
    badge: 'Genomics',
    badgeColor: 'text-sky-400 bg-sky-950/60 border-sky-800/60',
    turnaround: '3 - 5 business days',
    tools: ['FastQC', 'MultiQC', 'BWA-MEM2', 'Bowtie2', 'GATK4', 'FreeBayes', 'SnpEff', 'ANNOVAR'],
    deliverables: [
      'Comprehensive MultiQC quality control report (HTML)',
      'Filtered, sorted, and indexed BAM/CRAM alignment files',
      'Filtered variant call files (VCF / BCF) with annotations',
      'Executive summary report with publication-ready figures'
    ],
    description: 'We process raw FASTQ sequencing files through gold-standard GATK Best Practices workflows. From read trimming and quality scoring to high-accuracy alignment and deep variant filtering, our vetted bioinformatics specialists ensure your downstream genetics hypotheses rest on solid, reproducible foundations.',
    workflow: [
      { step: '01. Quality Auditing', desc: 'Per-base Phred scoring, adapter clipping, and duplication rate assessment.' },
      { step: '02. Reference Mapping', desc: 'Splice-aware or genomic alignment with high-speed BWA-MEM2 against hg38 or custom assemblies.' },
      { step: '03. Variant Calling', desc: 'HaplotypeCaller germline or Mutect2 somatic mutation discovery with VQSR recalibration.' },
      { step: '04. Functional Annotation', desc: 'ClinVar, dbSNP, and gnomAD population allele frequency integration.' }
    ]
  },
  rnaseq: {
    id: 'rnaseq',
    title: 'RNA Seq Analysis',
    tagline: 'Transcriptome quantification and differential gene expression',
    badge: 'Transcriptomics',
    badgeColor: 'text-purple-400 bg-purple-950/60 border-purple-800/60',
    turnaround: '4 - 6 business days',
    tools: ['Fastp', 'STAR aligner', 'Salmon', 'DESeq2', 'edgeR', 'ClusterProfiler', 'GSEA', 'ComplexHeatmap'],
    deliverables: [
      'Raw and normalized count matrices (TPM, FPKM, CPM)',
      'Differential expression tables with FDR p-values & log2FC',
      'Interactive volcano plots, PCA scatter graphs, and hierarchically clustered heatmaps',
      'GO biological process and KEGG pathway enrichment charts'
    ],
    description: 'Deconvolute complex gene expression dynamics across conditions, drug treatments, or disease cohorts. Our transcriptome analysts provide end-to-end alignment, statistical DEG modeling, and biological pathway interpretation so you can pinpoint key regulatory drivers with precision.',
    workflow: [
      { step: '01. Quantification', desc: 'High-speed pseudoalignment with Salmon or splice-aware STAR mapping.' },
      { step: '02. Normalization & QC', desc: 'Sample clustering, PCA outlier detection, and batch-effect correction via ComBat-seq.' },
      { step: '03. Differential Testing', desc: 'Negative binomial generalized linear models via DESeq2/edgeR.' },
      { step: '04. Pathway Biology', desc: 'Gene set enrichment (GSEA) against Hallmarks, KEGG, and Reactome.' }
    ]
  },
  additional: {
    id: 'additional',
    title: 'Additional Specialized Services',
    tagline: 'Single-cell, Metagenomics, and bespoke analytical pipelines',
    badge: 'Multi-Omics',
    badgeColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60',
    turnaround: '5 - 10 business days',
    tools: ['CellRanger', 'Seurat v5', 'Scanpy', 'QIIME2', 'Kraken2 / Bracken', 'SPAdes', 'Nextflow', 'Snakemake'],
    deliverables: [
      'Single-cell Seurat / AnnData objects with cell cluster annotations',
      'Taxonomic composition bar plots & alpha/beta diversity metrics',
      'De novo or reference-guided draft genome contigs (FASTA)',
      'Containerized Nextflow/Snakemake pipelines for full reproducibility'
    ],
    description: 'Expand beyond bulk assays with frontier multi-omics support. Whether isolating rare cellular subtypes with single-cell RNA-seq (10x Genomics), profiling gut microbiomes via 16S / metagenomic shotgun sequencing, or automating institutional workflows, our freelancers are ready to assist.',
    workflow: [
      { step: '01. Strategy Consultation', desc: 'Define experimental design, library chemistry, and target read depth.' },
      { step: '02. Specialized Processing', desc: 'Custom pipeline execution with reproducible Nextflow/Docker architecture.' },
      { step: '03. Advanced Integration', desc: 'Cross-sample integration, trajectory inference, or metagenomic assembly.' },
      { step: '04. Delivery & Handoff', desc: 'Walkthrough session with code repositories and interactive dashboards.' }
    ]
  }
};

export default function Services() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [selectedCluster, setSelectedCluster] = useState<string | null>(null);
  
  // Consultation form state
  const [consultForm, setConsultForm] = useState({
    service: 'NGS Data Analysis',
    name: '',
    email: '',
    institution: '',
    organism: 'Human (Homo sapiens)',
    sampleCount: '12',
    platform: 'Illumina NovaSeq',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsConsultModalOpen(false);
      setConsultForm({
        service: 'NGS Data Analysis',
        name: '',
        email: '',
        institution: '',
        organism: 'Human (Homo sapiens)',
        sampleCount: '12',
        platform: 'Illumina NovaSeq',
        notes: ''
      });
    }, 2200);
  };

  // UMAP clusters data
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-zinc-700 selection:text-white relative overflow-hidden pb-24">
      
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-zinc-900/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-0 w-[550px] h-[550px] bg-sky-950/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-40 left-0 w-[500px] h-[500px] bg-zinc-900/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
        
        {/* Top Header & Value Props Section */}
        <div className="relative mb-12 lg:mb-16">
          
          {/* Realistic 3D Interactive DNA Double Helix (Top Right) */}
          <div className="absolute -top-6 right-0 w-[340px] sm:w-[420px] lg:w-[480px] h-[210px] hidden md:block z-0 overflow-hidden">
            <InteractiveDnaHelix width={480} height={210} className="w-full h-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Left Header Column */}
            <div className="lg:col-span-7">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/60 shadow-[inset_0_0_12px_rgba(255,255,255,0.02)] text-[11px] font-bold tracking-widest text-zinc-300 uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                OUR SERVICES
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.18] mb-4">
                Expert Bioinformatics<br />
                Support for <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">Your Research</span>
              </h1>

              {/* Subtitle */}
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
                We connect you with experienced bioinformatics freelancers who can help you analyze your biological data and turn it into meaningful insights.
              </p>
            </div>

            {/* Right Value Props (3 Pillars) */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-row gap-5 lg:justify-end pt-2">
              
              {/* Prop 1 */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-700/70 flex items-center justify-center text-sky-400 shrink-0 shadow-sm">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Skilled Freelancers</h4>
                  <p className="text-[11px] text-zinc-400 leading-snug mt-0.5">Verified experts in bioinformatics</p>
                </div>
              </div>

              {/* Prop 2 */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-700/70 flex items-center justify-center text-indigo-400 shrink-0 shadow-sm">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Flexible Engagement</h4>
                  <p className="text-[11px] text-zinc-400 leading-snug mt-0.5">Hire for short-term or long-term projects</p>
                </div>
              </div>

              {/* Prop 3 */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-700/70 flex items-center justify-center text-cyan-400 shrink-0 shadow-sm">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">High-Quality Results</h4>
                  <p className="text-[11px] text-zinc-400 leading-snug mt-0.5">Accurate, reliable and on-time delivery</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 3 Main Service Cards Grid with Framer Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* ======================================================== */}
          {/* CARD 1: NGS Data Analysis (Full-Card Background + Glassmorphism) */}
          {/* ======================================================== */}
          <FramerCard 
            glowColor="rgba(56, 189, 248, 0.22)" 
            borderColor="rgba(56, 189, 248, 0.45)"
            className="relative rounded-2xl overflow-hidden group min-h-[520px] flex flex-col justify-between transition-all"
          >
            {/* 1. Full-Card Background Image Visual */}
            <NgsCardBackground />

            {/* 2. Glassmorphism Frosted Blur & Gradient Overlay */}
            <div className="absolute inset-0 bg-zinc-950/65 sm:bg-zinc-950/55 backdrop-blur-[8px] bg-gradient-to-b from-zinc-950/40 via-zinc-950/65 to-zinc-950/90 pointer-events-none border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]" />

            {/* 3. Foreground Interactive Content with High Legibility */}
            <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-between h-full min-h-[520px]">
              <div>
                {/* Header: Icon & Category Badge */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-sky-950/70 border border-sky-400/40 backdrop-blur-md flex items-center justify-center text-sky-400 shadow-lg shadow-sky-950/50 group-hover:border-sky-300 transition-colors">
                    <Dna className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-sky-950/70 text-sky-300 border border-sky-700/60 backdrop-blur-md font-semibold tracking-wider uppercase shadow-sm">
                    GENOMICS
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-sky-300 transition-colors drop-shadow-sm">
                  NGS Data Analysis
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed mb-6 font-normal">
                  Get high-quality insights from your next-generation sequencing data with automated quality control and high-accuracy alignment.
                </p>

                {/* Checklist with Frosted Accent Items */}
                <ul className="space-y-3 text-xs sm:text-[13px] text-zinc-200 mb-6">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-sky-300 stroke-[3]" />
                    </div>
                    <span>Quality control & filtering</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-sky-300 stroke-[3]" />
                    </div>
                    <span>Read alignment & mapping</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-sky-300 stroke-[3]" />
                    </div>
                    <span>Variant calling & annotation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-sky-300 stroke-[3]" />
                    </div>
                    <span>Differential expression analysis</span>
                  </li>
                </ul>
              </div>

              {/* Link & Consultation Action Bar */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                <button 
                  onClick={() => setActiveModal('ngs')}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors group/btn cursor-pointer"
                >
                  Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>

                <button 
                  onClick={() => {
                    setConsultForm(prev => ({ ...prev, service: 'NGS Data Analysis' }));
                    setIsConsultModalOpen(true);
                  }}
                  className="text-xs font-semibold text-zinc-200 hover:text-white px-3.5 py-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800/90 border border-white/15 backdrop-blur-md shadow-lg shadow-black/40 transition-all hover:scale-[1.02]"
                >
                  Request Support
                </button>
              </div>
            </div>
          </FramerCard>

          {/* ======================================================== */}
          {/* CARD 2: RNA Seq Analysis (Full-Card Background + Glassmorphism) */}
          {/* ======================================================== */}
          <FramerCard 
            glowColor="rgba(168, 85, 247, 0.22)" 
            borderColor="rgba(168, 85, 247, 0.45)"
            className="relative rounded-2xl overflow-hidden group min-h-[520px] flex flex-col justify-between transition-all"
          >
            {/* 1. Full-Card Background Image Visual */}
            <RnaCellCardBackground />

            {/* 2. Glassmorphism Frosted Blur & Gradient Overlay */}
            <div className="absolute inset-0 bg-zinc-950/65 sm:bg-zinc-950/55 backdrop-blur-[8px] bg-gradient-to-b from-zinc-950/40 via-zinc-950/65 to-zinc-950/90 pointer-events-none border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]" />

            {/* 3. Foreground Interactive Content with High Legibility */}
            <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-between h-full min-h-[520px]">
              <div>
                {/* Header: Icon & Category Badge */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-purple-950/70 border border-purple-400/40 backdrop-blur-md flex items-center justify-center text-purple-400 shadow-lg shadow-purple-950/50 group-hover:border-purple-300 transition-colors">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-purple-950/70 text-purple-300 border border-purple-700/60 backdrop-blur-md font-semibold tracking-wider uppercase shadow-sm">
                    TRANSCRIPTOMICS
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-purple-300 transition-colors drop-shadow-sm">
                  RNA Seq Analysis
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed mb-6 font-normal">
                  Understand gene expression, cell states and biological pathways with precision down to single-transcript resolution.
                </p>

                {/* Checklist with Frosted Accent Items */}
                <ul className="space-y-3 text-xs sm:text-[13px] text-zinc-200 mb-6">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-purple-300 stroke-[3]" />
                    </div>
                    <span>Read alignment & quantification</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-purple-300 stroke-[3]" />
                    </div>
                    <span>Differential expression (DEG)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-purple-300 stroke-[3]" />
                    </div>
                    <span>Functional enrichment analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-purple-300 stroke-[3]" />
                    </div>
                    <span>Pathway & network analysis</span>
                  </li>
                </ul>
              </div>

              {/* Link & Consultation Action Bar */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                <button 
                  onClick={() => setActiveModal('rnaseq')}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group/btn cursor-pointer"
                >
                  Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>

                <button 
                  onClick={() => {
                    setConsultForm(prev => ({ ...prev, service: 'RNA Seq Analysis' }));
                    setIsConsultModalOpen(true);
                  }}
                  className="text-xs font-semibold text-zinc-200 hover:text-white px-3.5 py-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800/90 border border-white/15 backdrop-blur-md shadow-lg shadow-black/40 transition-all hover:scale-[1.02]"
                >
                  Request Support
                </button>
              </div>
            </div>
          </FramerCard>

          {/* ======================================================== */}
          {/* CARD 3: Additional Services (Full-Card Background + Glassmorphism) */}
          {/* ======================================================== */}
          <FramerCard 
            glowColor="rgba(52, 211, 153, 0.22)" 
            borderColor="rgba(52, 211, 153, 0.45)"
            className="relative rounded-2xl overflow-hidden group min-h-[520px] flex flex-col justify-between transition-all"
          >
            {/* 1. Full-Card Background Image Visual */}
            <UmapCardBackground selectedCluster={selectedCluster} />

            {/* 2. Glassmorphism Frosted Blur & Gradient Overlay */}
            <div className="absolute inset-0 bg-zinc-950/65 sm:bg-zinc-950/55 backdrop-blur-[8px] bg-gradient-to-b from-zinc-950/40 via-zinc-950/65 to-zinc-950/90 pointer-events-none border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]" />

            {/* 3. Foreground Interactive Content with High Legibility */}
            <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-between h-full min-h-[520px]">
              <div>
                {/* Header: Icon & Category Badge */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-950/70 border border-emerald-400/40 backdrop-blur-md flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-950/50 group-hover:border-emerald-300 transition-colors">
                    <FlaskConical className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-emerald-950/70 text-emerald-300 border border-emerald-700/60 backdrop-blur-md font-semibold tracking-wider uppercase shadow-sm">
                    MULTI-OMICS
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-emerald-300 transition-colors drop-shadow-sm">
                  Additional Services
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed mb-4 font-normal">
                  Comprehensive bioinformatics support for metagenomics, single-cell analysis, genome assembly, and custom pipelines.
                </p>

                {/* Interactive UMAP Cluster Selector on Glass */}
                <div className="flex flex-wrap gap-1.5 mb-5 p-1.5 rounded-xl bg-zinc-900/60 backdrop-blur-md border border-white/10">
                  {[
                    { name: 'T cells', color: '#38bdf8' },
                    { name: 'Monocytes', color: '#fb923c' },
                    { name: 'B cells', color: '#34d399' },
                    { name: 'NK cells', color: '#c084fc' }
                  ].map((c) => (
                    <button
                      key={c.name}
                      onMouseEnter={() => setSelectedCluster(c.name)}
                      onMouseLeave={() => setSelectedCluster(null)}
                      onClick={() => setSelectedCluster(selectedCluster === c.name ? null : c.name)}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-md flex items-center gap-1.5 transition-all cursor-pointer ${
                        selectedCluster === c.name 
                          ? 'bg-white/20 text-white font-bold shadow-sm' 
                          : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: c.color }} />
                      {c.name}
                    </button>
                  ))}
                </div>

                {/* Checklist with Frosted Accent Items */}
                <ul className="space-y-3 text-xs sm:text-[13px] text-zinc-200 mb-6">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-emerald-300 stroke-[3]" />
                    </div>
                    <span>Metagenomics analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-emerald-300 stroke-[3]" />
                    </div>
                    <span>Single-cell RNA-seq (scRNA)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-emerald-300 stroke-[3]" />
                    </div>
                    <span>Genome assembly & annotation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-emerald-300 stroke-[3]" />
                    </div>
                    <span>Custom analysis pipelines</span>
                  </li>
                </ul>
              </div>

              {/* Link & Consultation Action Bar */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                <button 
                  onClick={() => setActiveModal('additional')}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group/btn cursor-pointer"
                >
                  Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>

                <button 
                  onClick={() => {
                    setConsultForm(prev => ({ ...prev, service: 'Additional Services' }));
                    setIsConsultModalOpen(true);
                  }}
                  className="text-xs font-semibold text-zinc-200 hover:text-white px-3.5 py-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800/90 border border-white/15 backdrop-blur-md shadow-lg shadow-black/40 transition-all hover:scale-[1.02]"
                >
                  Request Support
                </button>
              </div>
            </div>
          </FramerCard>

        </div>

        {/* ======================================================== */}
        {/* BOTTOM EXPLAINER BANNER: "What does this mean?" with Framer Effect */}
        {/* ======================================================== */}
        <FramerCard 
          glowColor="rgba(255, 255, 255, 0.06)" 
          borderColor="rgba(255, 255, 255, 0.16)"
          className="p-6 sm:p-8"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
            {/* Left Narrative Block */}
            <div className="flex items-start gap-4 lg:max-w-2xl">
              <div className="w-11 h-11 rounded-xl bg-blue-950/70 border border-blue-500/30 flex items-center justify-center text-sky-400 shrink-0 shadow-sm mt-0.5">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  What does this mean?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Next-Generation Sequencing (NGS) and RNA-seq are advanced technologies used to study DNA and RNA at a massive scale. They help researchers understand genetic variations, gene expression, and biological processes — enabling better decisions in drug discovery, disease research and personalized medicine.
                </p>
              </div>
            </div>

            {/* Vertical divider on desktop */}
            <div className="hidden lg:block w-px h-20 bg-zinc-800/90 shrink-0" />

            {/* Right 3 Outcomes / Value metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:w-auto lg:shrink-0">
              
              {/* Metric 1 */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-sky-400 shrink-0">
                  <Dna className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">More data</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">Millions of sequences at once</p>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-purple-400 shrink-0">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Deeper insights</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">Find patterns and key changes</p>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-rose-400 shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Better outcomes</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">Accelerate research and innovation</p>
                </div>
              </div>

            </div>

          </div>
        </FramerCard>

      </div>

      {/* ======================================================== */}
      {/* SERVICE DETAIL MODAL (Triggered by "Learn more →") */}
      {/* ======================================================== */}
      <AnimatePresence>
        {activeModal && serviceDetails[activeModal] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6">
                <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border mb-3 ${serviceDetails[activeModal].badgeColor}`}>
                  {serviceDetails[activeModal].badge}
                </span>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  {serviceDetails[activeModal].title}
                </h2>
                <p className="text-xs text-zinc-400 mt-1">
                  {serviceDetails[activeModal].tagline}
                </p>
              </div>

              {/* Overview Description */}
              <p className="text-xs text-zinc-300 leading-relaxed mb-6 bg-zinc-950/60 p-4 rounded-xl border border-zinc-800/80">
                {serviceDetails[activeModal].description}
              </p>

              {/* Workflow Steps */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-sky-400" /> Standard Pipeline Workflow
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serviceDetails[activeModal].workflow.map((w, idx) => (
                    <div key={idx} className="bg-zinc-950/50 border border-zinc-800/60 p-3 rounded-lg">
                      <span className="text-[11px] font-bold text-white block mb-0.5">{w.step}</span>
                      <p className="text-[11px] text-zinc-400 leading-normal">{w.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Turnaround */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-zinc-950/50 border border-zinc-800/60 p-3.5 rounded-xl">
                  <span className="text-[11px] font-bold text-zinc-400 flex items-center gap-1.5 mb-2">
                    <Cpu className="w-3.5 h-3.5 text-purple-400" /> Industry Tools Used
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {serviceDetails[activeModal].tools.map((tool, i) => (
                      <span key={i} className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded font-mono">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-zinc-950/50 border border-zinc-800/60 p-3.5 rounded-xl">
                  <span className="text-[11px] font-bold text-zinc-400 flex items-center gap-1.5 mb-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" /> Estimated Turnaround
                  </span>
                  <p className="text-sm font-semibold text-white">
                    {serviceDetails[activeModal].turnaround}
                  </p>
                  <p className="text-[10px] text-zinc-400 mt-1">Accelerated delivery available upon request</p>
                </div>
              </div>

              {/* Deliverables */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-amber-400" /> Key Deliverables
                </h4>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {serviceDetails[activeModal].deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-zinc-800">
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white rounded-lg transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const servName = serviceDetails[activeModal].title;
                    setActiveModal(null);
                    setConsultForm(prev => ({ ...prev, service: servName }));
                    setIsConsultModalOpen(true);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                >
                  <Send className="w-3.5 h-3.5" /> Request Consultation for this Service
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ======================================================== */}
      {/* REQUEST CONSULTATION / INTAKE MODAL */}
      {/* ======================================================== */}
      <AnimatePresence>
        {isConsultModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setIsConsultModalOpen(false)}
                className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800/60 px-2.5 py-1 rounded-full inline-block mb-2">
                  Project Inquiry
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Connect with a Bioinformatics Specialist
                </h2>
                <p className="text-xs text-zinc-400 mt-1">
                  Tell us about your experimental setup. We will match you with a verified domain expert within 24 hours.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">Request Received</h3>
                  <p className="text-xs text-zinc-400 max-w-sm">
                    Thank you! Our scientific matching coordinator will review your dataset requirements and connect you with the right specialist.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleConsultSubmit} className="space-y-4">
                  {/* Service Select */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Primary Service Needed
                    </label>
                    <select
                      value={consultForm.service}
                      onChange={e => setConsultForm({ ...consultForm, service: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-zinc-600"
                    >
                      <option value="NGS Data Analysis">NGS Data Analysis (Variant Calling, WGS/WES)</option>
                      <option value="RNA Seq Analysis">RNA Seq Analysis (Bulk Transcriptomics & DEGs)</option>
                      <option value="Single-cell RNA-seq">Single-cell RNA-seq (10x Genomics, Seurat)</option>
                      <option value="Metagenomics">Metagenomics & Microbiome (16S / Shotgun)</option>
                      <option value="Custom Pipeline">Custom Analysis Pipeline (Nextflow / Snakemake)</option>
                    </select>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Eleanor Vance"
                        value={consultForm.name}
                        onChange={e => setConsultForm({ ...consultForm, name: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Institutional Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="vance@institute.edu"
                        value={consultForm.email}
                        onChange={e => setConsultForm({ ...consultForm, email: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600"
                      />
                    </div>
                  </div>

                  {/* Institution & Organism */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Lab / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="Harvard Medical / Biotech"
                        value={consultForm.institution}
                        onChange={e => setConsultForm({ ...consultForm, institution: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Target Organism
                      </label>
                      <input
                        type="text"
                        placeholder="Human, Mouse, Arabidopsis..."
                        value={consultForm.organism}
                        onChange={e => setConsultForm({ ...consultForm, organism: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600"
                      />
                    </div>
                  </div>

                  {/* Sample count & Platform */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Approx. Sample Count
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 12 samples (paired-end)"
                        value={consultForm.sampleCount}
                        onChange={e => setConsultForm({ ...consultForm, sampleCount: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Sequencing Platform
                      </label>
                      <select
                        value={consultForm.platform}
                        onChange={e => setConsultForm({ ...consultForm, platform: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-zinc-600"
                      >
                        <option value="Illumina NovaSeq / NextSeq">Illumina (NovaSeq, NextSeq)</option>
                        <option value="Oxford Nanopore">Oxford Nanopore (MinION / PromethION)</option>
                        <option value="PacBio HiFi">PacBio HiFi (Revio / Sequel)</option>
                        <option value="10x Genomics Chromium">10x Genomics Chromium (3' / 5')</option>
                        <option value="Other / Raw FASTQ available">Other / FASTQ ready</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Brief Research Objective & Key Deadlines
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g., Comparing treated vs control breast cancer cell lines, looking for drug resistance biomarkers before next grant deadline..."
                      value={consultForm.notes}
                      onChange={e => setConsultForm({ ...consultForm, notes: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 resize-none"
                    />
                  </div>

                  {/* Form Actions */}
                  <div className="flex items-center justify-end gap-3 pt-3 border-t border-zinc-800">
                    <button
                      type="button"
                      onClick={() => setIsConsultModalOpen(false)}
                      className="px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 text-xs font-bold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.15)] cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" /> Submit Research Request
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}