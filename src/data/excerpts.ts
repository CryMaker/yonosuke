import type { LiteraryExcerpt } from '../types/excerpt'

export const excerpts: LiteraryExcerpt[] = [
  {
    slug: 'to-be-or-not-to-be',
    title: 'To Be, or Not to Be',
    content: `To be, or not to be, that is the question:
Whether 'tis nobler in the mind to suffer
The slings and arrows of outrageous fortune,
Or to take arms against a sea of troubles
And by opposing end them. To die—to sleep,
No more; and by a sleep to say we end
The heart-ache and the thousand natural shocks
That flesh is heir to: 'tis a consummation
Devoutly to be wish'd. To die, to sleep;
To sleep, perchance to dream—ay, there's the rub:
For in that sleep of death what dreams may come,
When we have shuffled off this mortal coil,
Must give us pause. There's the respect
That makes calamity of so long life.`,
    source: 'Hamlet, Act III, Scene I',
    sourceYear: 1603,
    authorId: 'shakespeare',
    language: 'en',
    notes: 'Perhaps the most famous soliloquy in English literature. Every time I read it, I find a new layer of meaning in the tension between action and inaction, consciousness and oblivion. The phrase "mortal coil" — suggesting both the turbulence of life and the body as something we might shuffle off like a garment — remains one of the most compressed metaphors in the language.',
    tags: ['existentialism', 'drama', 'philosophy', 'soliloquy'],
    featured: true,
  },
  {
    slug: 'diary-of-a-madman-opening',
    title: '狂人日记 — 开篇',
    content: `今天晚上，很好的月光。

我不见他，已是三十多年；今天见了，精神分外爽快。才知道以前的三十多年，全是发昏；然而须十分小心。不然，那赵家的狗，何以看我两眼呢？

我怕得有理。`,
    source: '《狂人日记》(A Madman\'s Diary)',
    sourceYear: 1918,
    authorId: 'lu-xun',
    language: 'zh',
    notes: 'The opening lines of China\'s first modern short story, published in 1918. In just a few sentences, Lu Xun establishes an atmosphere of paranoia and alienation. The moonlight motif ("很好的月光") and the questioning gaze of the dog are brilliantly unsettling. The final line — 我怕得有理 ("I have good reason to be afraid") — is one of the most chilling sentences in all of Chinese literature.',
    tags: ['modern-chinese-literature', 'social-criticism', 'short-story'],
    featured: true,
  },
  {
    slug: 'war-and-peace-opening',
    title: 'War and Peace — Opening Lines',
    content: `"Well, Prince, so Genoa and Lucca are now just family estates of the Buonapartes. But I warn you, if you don't tell me that this means war, if you still try to defend the infamies and horrors perpetrated by that Antichrist — I really believe he is Antichrist — I will have nothing more to do with you and you are no longer my friend, no longer my 'faithful slave,' as you call yourself! But how do you do? I see I have frightened you — sit down and tell me all the news."

It was in July, 1805, and the speaker was the well-known Anna Pavlovna Scherer, maid of honor and favorite of the Empress Marya Fedorovna.`,
    source: 'War and Peace, Book One, Chapter 1',
    sourceYear: 1869,
    authorId: 'tolstoy',
    language: 'en',
    translator: 'Louise and Aylmer Maude',
    notes: 'Tolstoy opens his epic by plunging us directly into a St. Petersburg soirée. The conversational opening in French-inflected salon speech immediately establishes the historical moment — Europe on the brink of Napoleonic war — and Anna Pavlovna\'s character in a single breathless paragraph. No prologue, no scene-setting, just the raw energy of human speech.',
    tags: ['russian-literature', 'historical-fiction', 'epic', 'opening-lines'],
    featured: true,
  },
  {
    slug: 'tagore-stray-birds',
    title: 'Stray Birds — Selected Verses',
    content: `If you shed tears when you miss the sun, you also miss the stars.

Do not blame your food because you have no appetite.

The bird wishes it were a cloud.
The cloud wishes it were a bird.

The fish in the water is silent, the animal on the earth is noisy, the bird in the air is singing.
But Man has in him the silence of the sea, the noise of the earth and the music of the air.`,
    source: 'Stray Birds (1916)',
    sourceYear: 1916,
    authorId: 'tagore',
    language: 'en',
    notes: 'Tagore\'s aphoristic verses distill profound truths into single breaths. The observation about silence, noise, and music in human nature — that we contain the sea, the earth, and the sky within us — is one of the most beautiful characterizations of what it means to be human.',
    tags: ['poetry', 'aphorism', 'bengali-literature', 'wisdom'],
    featured: false,
  },
  {
    slug: 'notes-from-underground-opening',
    title: 'Notes from Underground — Opening',
    content: `I am a sick man... I am a spiteful man. I am an unattractive man. I believe my liver is diseased. However, I know nothing at all about my disease, and do not know for certain what ails me. I don't consult a doctor for it, and never have, though I have a respect for medicine and doctors. Besides, I am extremely superstitious, sufficiently so to respect medicine, anyway (I am well-educated enough not to be superstitious, but I am superstitious). No, I refuse to consult a doctor from spite. That you probably will not understand. Well, I understand it, though.`,
    source: 'Notes from Underground, Part I, Chapter I',
    sourceYear: 1864,
    authorId: 'dostoevsky',
    language: 'en',
    translator: 'Constance Garnett',
    notes: 'Dostoevsky\'s narrator introduces himself with a cascade of contradictions — sick but refusing treatment, educated but superstitious, spiteful yet self-aware. This opening revolutionized narrative voice in literature: the unreliable, hyper-self-conscious anti-hero who argues against his own best interests simply to assert his freedom. The repeated "I" at the start of each sentence is not egotism but desperation — a self that can only confirm its existence through defiance.',
    tags: ['russian-literature', 'existentialism', 'psychology', 'first-person-narrative'],
    featured: false,
  },
]
