import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Bot, Send, Sparkles } from 'lucide-react';

const DUMMY_QA = [
  {
    question: "What is bioinformatics?",
    answer: "Bioinformatics is an interdisciplinary field that develops methods and software tools for understanding biological data, especially when the data sets are large and complex."
  },
  {
    question: "How do you use CRISPR?",
    answer: "We use CRISPR-Cas9 for precise genome editing in our genetics research, allowing us to study gene function and develop targeted therapies."
  },
  {
    question: "What areas of cancer research do you focus on?",
    answer: "Our oncology division focuses on precision oncology, tumor microenvironment interactions, and developing targeted immunotherapies."
  },
  {
    question: "Do you offer training for your tools?",
    answer: "Yes, we offer both beginner workshops and advanced courses to help researchers master our bioinformatics platforms. Check out our Training section!"
  },
  {
    question: "Who is on your research team?",
    answer: "Our team includes world-class experts in bioinformatics, structural biology, immunology, and genetics. You can learn more on our Team page."
  }
];

type Message = {
  id: string;
  type: 'user' | 'bot';
  text: string;
};

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      type: 'bot',
      text: 'Hello! I am your AI Research Assistant. How can I help you today?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = { id: Date.now().toString(), type: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    // Find answer or use default
    const matchedQA = DUMMY_QA.find(
      qa => qa.question.toLowerCase() === text.toLowerCase() || 
            text.toLowerCase().includes(qa.question.toLowerCase().replace('?', ''))
    );

    const botResponse = matchedQA 
      ? matchedQA.answer 
      : "I'm a demo AI limited to answering specific questions right now. Try asking one of the suggested questions above!";

    // Simulate delay for bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), type: 'bot', text: botResponse }]);
    }, 600);
  };

  const handleQuestionClick = (question: string) => {
    handleSend(question);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-8rem)] bg-[#1b212b] border border-white/10 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                  <Bot className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-zinc-50 font-medium text-sm">BioAssist AI</h3>
                  <p className="text-emerald-400 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                      msg.type === 'user' 
                        ? 'bg-emerald-500 text-white rounded-tr-sm' 
                        : 'bg-white/5 text-zinc-300 border border-white/10 rounded-tl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {/* Suggested Questions (only show if last message is from bot and we haven't asked many questions) */}
              {messages[messages.length - 1].type === 'bot' && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {DUMMY_QA.map((qa, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuestionClick(qa.question)}
                      className="text-xs text-left bg-white/5 hover:bg-white/10 border border-white/10 text-emerald-400/80 hover:text-emerald-400 rounded-xl px-3 py-2 transition-colors flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3 flex-shrink-0" />
                      {qa.question}
                    </button>
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-black/20">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
                className="relative"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-emerald-500 hover:text-emerald-400 disabled:text-zinc-600 disabled:hover:text-zinc-600 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full shadow-lg shadow-emerald-500/25 flex items-center justify-center z-50 text-white"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>
    </>
  );
}