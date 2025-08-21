from typing import List, Tuple
from dataclasses import dataclass

@dataclass
class NounDeclensions:
    noun: str
    rank: int
    declensions: List[Tuple[str, str]]
    
    def __init__(self, noun: str, rank: int):
        self.noun = noun
        self.rank = rank
        # Initialize with 7 empty pairs of arrays
        self.declensions = [("", "") for _ in range(7)]
    
    def set_declension(self, index: int, sing: str, pl: str) -> None:
        """
        Set the declension pair at the specified index.
        
        Args:
            index: Index (0-6) of the declension to set
            sing: Singular forms (comma-separated string)
            pl: Plural forms (comma-separated string)
        
        Raises:
            IndexError: If index is out of range
        """
        if not 0 <= index <= 6:
            raise IndexError("Declension index must be between 0 and 6")
            
        # Split and clean the values
        sing_forms = [s.strip() for s in sing.split(',') if s.strip()]
        pl_forms = [s.strip() for s in pl.split(',') if s.strip()]
        
        self.declensions[index] = (sing_forms, pl_forms)
    
    def get_declension(self, index: int) -> Tuple[List[str], List[str]]:
        """
        Get the declension pair at the specified index.
        
        Args:
            index: Index (0-6) of the declension to get
        
        Returns:
            Tuple containing two lists: singular and plural forms
            
        Raises:
            IndexError: If index is out of range
        """
        if not 0 <= index <= 6:
            raise IndexError("Declension index must be between 0 and 6")
        return self.declensions[index]
    
    def __str__(self) -> str:
        """String representation of the noun and its declensions."""
        result = f"Noun: {self.noun} (rank: {self.rank})\n"
        for i, (sing_forms, pl_forms) in enumerate(self.declensions):
            result += f"  {i}: {sing_forms}, {pl_forms}\n"
        return result.rstrip()