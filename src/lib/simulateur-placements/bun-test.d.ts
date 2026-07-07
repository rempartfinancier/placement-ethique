/**
 * Déclarations minimales pour `bun:test`, limitées aux matchers utilisés
 * par les trois fichiers de tests du module (engine, fiscalite, share).
 * Le tsconfig du projet restreint les types ambiants
 * (`"types": ["vite/client"]`) : ce stub local évite d'élargir la
 * configuration globale ou d'ajouter une dépendance pour le seul typage.
 * Repris de rempartfinancier/src/lib/simulateur-placements/bun-test.d.ts.
 */

declare module "bun:test" {
  interface Matchers {
    toBe(attendu: unknown): void;
    toBeCloseTo(attendu: number, precision?: number): void;
    toBeGreaterThan(attendu: number): void;
    toBeLessThan(attendu: number): void;
    toBeNull(): void;
    toEqual(attendu: unknown): void;
    toContain(attendu: unknown): void;
    toHaveLength(attendu: number): void;
    not: Matchers;
  }
  export function describe(nom: string, fn: () => void): void;
  export function test(nom: string, fn: () => void | Promise<void>): void;
  export function expect(valeur: unknown): Matchers;
}
