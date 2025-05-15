'use client'

import Link from 'next/link';
import { memo } from 'react';

// Memoize the comparison table to prevent unnecessary re-renders
const ComparisonTable = memo(() => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse mb-6">
      <thead>
        <tr className="bg-purple-900/50">
          <th className="border border-purple-700 p-3 text-left">Aspect</th>
          <th className="border border-purple-700 p-3 text-left">Curvy</th>
          <th className="border border-purple-700 p-3 text-left">Aztec</th>
          <th className="border border-purple-700 p-3 text-left">Aleph Zero</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-black/50">
          <td className="border border-purple-700 p-3 font-medium">Privacy</td>
          <td className="border border-purple-700 p-3">Strong, uses stealth addresses and view tag system for unlinkable transactions across chains</td>
          <td className="border border-purple-700 p-3">Strong, uses zk-SNARKs for shielding, ideal for DeFi</td>
          <td className="border border-purple-700 p-3">Strong, privacy-focused with instant finality, suitable for enterprise and DeFi</td>
        </tr>
        <tr className="bg-purple-900/20">
          <td className="border border-purple-700 p-3 font-medium">Cost</td>
          <td className="border border-purple-700 p-3">Excellent, gasless transactions eliminate fees</td>
          <td className="border border-purple-700 p-3">Moderate, incurs Ethereum gas fees (reduced by zk-rollups)</td>
          <td className="border border-purple-700 p-3">Moderate, standard blockchain fees apply</td>
        </tr>
        <tr className="bg-black/50">
          <td className="border border-purple-700 p-3 font-medium">Speed</td>
          <td className="border border-purple-700 p-3">Likely fast, lightweight protocol with gasless design</td>
          <td className="border border-purple-700 p-3">Moderate, limited by Ethereum's 15-30 TPS with zk-rollups</td>
          <td className="border border-purple-700 p-3">Excellent, instant transaction finality</td>
        </tr>
        <tr className="bg-purple-900/20">
          <td className="border border-purple-700 p-3 font-medium">Scalability</td>
          <td className="border border-purple-700 p-3">Limited, depends on underlying blockchains</td>
          <td className="border border-purple-700 p-3">High, zk-rollups can scale to thousands of TPS</td>
          <td className="border border-purple-700 p-3">High, designed for enterprise-scale with scalable consensus</td>
        </tr>
        <tr className="bg-black/50">
          <td className="border border-purple-700 p-3 font-medium">Usability</td>
          <td className="border border-purple-700 p-3">High, gasless and multichain simplify usage</td>
          <td className="border border-purple-700 p-3">Moderate, requires technical knowledge for zk-proofs</td>
          <td className="border border-purple-700 p-3">High, user-friendly for enterprise and DeFi users</td>
        </tr>
      </tbody>
    </table>
  </div>
));

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">Research: Comparing Curvy, Aztec, and Aleph Zero for Web3 Privacy</h1>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-purple-300">Overview of Curvy</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Curvy is a multichain stealth address protocol designed to enable private, unlinkable, and gasless transactions across multiple blockchains, such as Ethereum and Polygon. It uses stealth addresses, spending and viewing keys, and a view tag system within an ephemeral registry to ensure transactions cannot be traced to the sender or receiver. By eliminating gas fees, Curvy enhances cost-efficiency while maintaining privacy, making it a versatile solution for secure cross-chain interactions.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-purple-300">Overview of Aztec</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Aztec is a Layer-2 privacy solution on Ethereum, leveraging zero-knowledge proofs (zk-SNARKs) to enable private transactions, primarily for DeFi applications. It shields sender, receiver, and transaction amounts, using zk-rollups to batch transactions off-chain before settling on Ethereum, enhancing efficiency while maintaining privacy.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-purple-300">Overview of Aleph Zero</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Aleph Zero is a privacy-focused Layer-1 public blockchain designed for enterprise, Web3, and DeFi applications. It offers instant transaction finality through its high-speed consensus mechanism, ensuring secure and confidential transactions. With a focus on scalability and privacy, Aleph Zero supports a variety of use cases while prioritizing data protection across its ecosystem.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-purple-300">Comparison Table</h2>
          <ComparisonTable />
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-purple-300">Alignment with a Secure Web3 Ecosystem</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            A secure Web3 ecosystem prioritizes user control, data protection, and resilience against surveillance or exploits. Curvy's gasless, multichain approach enhances security by reducing metadata leaks and mitigating chain-specific vulnerabilities, offering broad accessibility. Aztec's zk-SNARKs provide robust cryptographic security, but its Ethereum dependency introduces risks like fee volatility or smart contract exploits. Aleph Zero's instant finality and enterprise focus strengthen security through rapid, confidential transactions, though its fees might limit universal adoption. Curvy's cost efficiency and multichain flexibility, combined with Aleph Zero's speed, make them strong contributors to a secure, decentralized Web3 ecosystem, while Aztec's scalability adds value for specific high-volume needs.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-purple-300">Best Alignment</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Curvy aligns best with a secure Web3 ecosystem. Its gasless, multichain design eliminates cost barriers and reduces exposure to metadata leaks, ensuring privacy across diverse blockchains. This broad compatibility and cost efficiency enhance user control and resilience, key pillars of a secure Web3, making it the most adaptable solution for widespread security adoption.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-purple-300">Future Aspects for Curvy</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Looking ahead, Curvy could evolve to further strengthen Web3 security. Integration with emerging Layer-2 scaling solutions could enhance its scalability, addressing its current limitation of depending on underlying blockchains. Adopting quantum-resistant cryptography would future-proof its privacy features against potential quantum computing threats. Additionally, expanding compatibility with newer blockchains and privacy-focused ecosystems could solidify Curvy's role in a unified, secure Web3 landscape by 2026, ensuring it remains a leader in cost-efficient, private cross-chain transactions.
          </p>
        </section>
      </div>
    </div>
  );
}

